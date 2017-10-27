<?php

namespace BERGWERK\BwrkTemplate\ViewHelpers;

use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * A view helper for creating a svg sprite item
 *
 * = Example =
 * <code>
 * <bwrk:sprite symbol="example" class="example-icon"/>
 * </code>
 *
 * <output>
 * <span class="sprite sprite--example example-icon">
 *  <svg viewBox="0 0 1 1">
 *      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="typo3conf/ext/bwrk_template/Resources/Public/Sprite/sprite.svg#example"></use>
 *  </svg>
 * </span>
 * </output>
 */

class SpriteViewHelper extends AbstractViewHelper
{
    protected $escapeOutput = false;

    /**
     * @param string $symbol
     * @param string $class
     * @return string
     */
    public function render($symbol, $class = '')
    {
        $html = '<span class="sprite sprite--' . $symbol . ' ' . $class . '">
                      <svg viewBox="0 0 1 1">
                          <use xlink:href="typo3conf/ext/bwrk_template/Resources/Public/Sprite/Frontend/sprite.svg#' . $symbol . '"></use>
                      </svg>
                </span>';

        return $html;
    }
}

