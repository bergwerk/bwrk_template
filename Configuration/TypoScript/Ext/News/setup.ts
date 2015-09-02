plugin.tx_news {
    #    mvc.callDefaultActionIfActionCantBeResolved = 1

    view {
        templateRootPaths {
            100 = {$plugin.tx_news.view.templateRootPath}
        }

        partialRootPaths {
            100 = {$plugin.tx_news.view.partialRootPath}
        }

        layoutRootPaths {
            100 = {$plugin.tx_news.view.layoutRootPath}
        }
    }

    # Modify the translation
    _LOCAL_LANG {
        default {
            read_more = mehr lesen
        }
    }

    # ====================================
    # Settings available inside Controller and View by accessing $this->settings or {settings.xyz}
    # ====================================
    settings {
        #        cssFile = {$plugin.tx_news.settings.cssFile}

        #Displays a dummy image if the news have no media items
        displayDummyIfNoMedia = 1

        # Output format
        format = html

        # general settings
        #        overrideFlexformSettingsIfEmpty = cropMaxCharacters,dateField,timeRestriction,orderBy,orderDirection,backPid,listPid,startingpoint,recursive

        includeSubCategories = 0

        analytics {
            social {
                facebookLike = 0
                facebookShare = 0
                twitter = 0
            }
        }

        #        detailPidDetermination = flexform, categories, default

        #        defaultDetailPid = 0
        #        dateField = datetime

        link {
            typesOpeningInNewWindow = 2
            hrDate = 0
            hrDate {
                day = j
                month = n
                year = Y
            }

            skipControllerAndAction = 0
        }

        cropMaxCharacters = 230
        #        orderBy = datetime
        #        orderDirection = desc
        #        topNewsFirst = 0
        #        orderByAllowed = sorting,author,uid,title,teaser,author,tstamp,crdate,datetime,categories.title

        facebookLocale = de_DE
        googlePlusLocale = de
        disqusLocale = de

        # Interface implementations
        #        interfaces {
        #            media {
        #                video = Tx_News_MediaRenderer_Audio_Mp3,Tx_News_MediaRenderer_Video_Quicktime,Tx_News_MediaRenderer_Video_File,Tx_News_MediaRenderer_Video_Youtube,Tx_News_MediaRenderer_Video_Vimeo,Tx_News_MediaRenderer_Video_Videosites
        #            }
        #            falMedia {
        #                video = Tx_News_MediaRenderer_Video_Fal
        #            }
        #        }

        # --------------
        #  Search
        # --------------
        #        search {
        #            fields = teaser,title,bodytext
        #        }

        # --------------
        #  Detail
        # --------------
        detail {
            #            errorHandling = pageNotFoundHandler
            #            registerProperties = keywords,title
            showSocialShareButtons = 0

            # media configuration
            media {
                image {
                    # choose the rel tag like gallery[fo]
                    #                    lightbox = lightbox[myImageSet]
                    maxWidth = 800
                    maxHeight =
                }

                video {
                    width = 800
                    height = 600
                }
            }
        }

        # --------------
        #  List
        # --------------
        list {
            # media configuration
            media {
                image {
                    maxWidth = 300
                    maxHeight = 225
                }

                dummyImage = fileadmin/templates/default/img/dummyimage.png
            }

            # Paginate configuration.
            paginate {
                #                itemsPerPage = 10
                #                insertAbove = 1
                #                insertBelow = 1
                #                templatePath =
                #                prevNextHeaderTags = 1
                #                maximumNumberOfLinks = 3
            }

            #            rss {
            #                channel {
            #                    title = {$plugin.tx_news.rss.channel.title}
            #                    description = {$plugin.tx_news.rss.channel.description}
            #                    language = {$plugin.tx_news.rss.channel.language}
            #                    copyright = {$plugin.tx_news.rss.channel.copyright}
            #                    generator = {$plugin.tx_news.rss.channel.generator}
            #                    link = {$plugin.tx_news.rss.channel.link}
            #                }
            #            }
        }

        # --------------
        #  Common
        # --------------
        #        relatedFiles {
        #            fileSizeLabels =
        #            download {
        #                labelStdWrap {
        #                    cObject = TEXT
        #                }
        #            }
        #        }

        # Opengraph implementation
        #        opengraph {
        #            site_name =  {$plugin.tx_news.opengraph.site_name}
        #            type = article
        #            admins =
        #            email =
        #            phone_number =
        #            fax_number =
        #            latitude =
        #            longitude =
        #            street-address =
        #            locality =
        #            region =
        #            postal-code =
        #            country-name =
        #        }
    }
}