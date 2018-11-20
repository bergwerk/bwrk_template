<?php

namespace BERGWERK\BwrkTemplate\Controller;

use BERGWERK\BwrkTemplate\Bootstrap;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Core\Service\OpcodeCacheService;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;
use TYPO3\CMS\Extbase\Utility\DebuggerUtility;
use TYPO3\CMS\Install\Service\ClearCacheService;

class ClearCacheController extends ActionController
{
    /**
     * @param ServerRequestInterface $request
     * @return bool
     */
    protected function checkAccess(ServerRequestInterface $request)
    {
        $headerAuthentication = $request->getHeader(Bootstrap::CACHE_AUTH_HEADER);

        if (count($headerAuthentication) != 1) {
            return false;
        }

        $headerPasswordMd5 = array_shift($headerAuthentication);

        return $headerPasswordMd5 == md5(Bootstrap::getInstallToolPassword());
    }

    /**
     * @param ServerRequestInterface $request
     * @param ResponseInterface $response
     * @return ResponseInterface
     */
    public function clearCacheAction(ServerRequestInterface $request, ResponseInterface $response)
    {
        if (!$this->checkAccess($request)) {
            $response->getBody()->write('Unauthorized');
            return $response->withStatus(401, 'Unauthorized');
        }

        GeneralUtility::makeInstance(ClearCacheService::class)->clearAll();
        GeneralUtility::makeInstance(OpcodeCacheService::class)->clearAllActive();

        if (function_exists('opcache_reset') && boolval(ini_get('opcache.enable'))) {
            opcache_reset();
        }

        $response->getBody()->write('Cache Flushed');

        return $response;
    }
}
