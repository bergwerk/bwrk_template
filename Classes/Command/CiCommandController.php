<?php

namespace BERGWERK\BwrkTemplate\Command;

use BERGWERK\BwrkTemplate\Bootstrap;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class CiCommandController extends Command
{
    /**
     * Configure the command by defining the name, options and arguments
     */
    protected function configure()
    {
        $this->addArgument(
            'url',
            InputArgument::REQUIRED,
            'The Frontend URL'
        );
    }

    /**
     * Update language packs of all active languages for all active extensions
     *
     * @param InputInterface $input
     * @param OutputInterface $output
     * @throws \InvalidArgumentException
     * @return int
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        try {
            $url = $input->getArgument('url') . '/?eID=clearCache';

            $output->writeln('Calling ' . $url . '...');

            $ch = curl_init();

            $headers = array(
                'Accept: application/json',
                'Content-Type: application/json',
                Bootstrap::CACHE_AUTH_HEADER . ': ' . md5(Bootstrap::getInstallToolPassword())
            );

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_HEADER, 0);

            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
            curl_setopt($ch, CURLOPT_POSTFIELDS, null);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            $result = curl_exec($ch);

            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

            if ($httpCode != 200) {
                throw new \Exception($result, $httpCode);
            }

            curl_close($ch);

            $output->writeln('<info>' . $result . '</info>');
        } catch (\Exception $exception) {
            $output->writeln('<error>' . $exception->getMessage() . '</error>');
        }
    }
}
