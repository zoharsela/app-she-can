export const booksService = {
    getBooks,
    getById,
    saveBooks,
    addReview,
    googleBooks,
    getGoogleBook,
    addBookToShop,
    getNegBookId
}

import { utilService } from './util-service.js'

const defaultBooks = {
    "kind": "books#volumes",
    "totalItems": 591,
    "items": [
        {
            "kind": "books#volume",
            "id": "ky9NpFgNmmwC",
            "etag": "kCP53QY6P8c",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/ky9NpFgNmmwC",
            "volumeInfo": {
                "title": "Wellness flowers",
                "subtitle": "i dodici rimedi per i conflitti psicosomatici secondo la psicobiotica",
                "authors": [
                    "Simone Ramilli"
                ],
                "publisher": "Tecniche Nuove",
                "publishedDate": "2008",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9788848122344"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "8848122345"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 240,
                "printType": "BOOK",
                "categories": [
                    "Medical"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.0.1.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=ky9NpFgNmmwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=ky9NpFgNmmwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "it",
                "previewLink": "http://books.google.it/books?id=ky9NpFgNmmwC&pg=PA191&dq=flowers&hl=&as_brr=6&cd=1&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=ky9NpFgNmmwC&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=ky9NpFgNmmwC"
            },
            "saleInfo": {
                "country": "IT",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 16.45,
                    "currencyCode": "EUR"
                },
                "retailPrice": {
                    "amount": 16.45,
                    "currencyCode": "EUR"
                },
                "buyLink": "https://play.google.com/store/books/details?id=ky9NpFgNmmwC&rdid=book-ky9NpFgNmmwC&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 16450000,
                            "currencyCode": "EUR"
                        },
                        "retailPrice": {
                            "amountInMicros": 16450000,
                            "currencyCode": "EUR"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "IT",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/Wellness_flowers-sample-pdf.acsm?id=ky9NpFgNmmwC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=ky9NpFgNmmwC&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Utilizzo dei Wellness <b>Flowers</b> per un equilibrio del benessere psicofisico in <br>\ngenerale Si vedano i “Consigli d&#39;uso” riportati nelle schede dei singoli Wellness <br>\n<b>Flowers</b> (Parte terza). Utilizzo dei Wellness <b>Flowers</b> per il sostegno alla persona <br>\nnel&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "o0DhDwAAQBAJ",
            "etag": "sBSLd1+qVQw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/o0DhDwAAQBAJ",
            "volumeInfo": {
                "title": "Flowers",
                "authors": [
                    "Mattia Regalia"
                ],
                "publisher": "Youcanprint",
                "publishedDate": "2020-05-02",
                "description": "In questa opera il poeta vuole osare affrontando in tematica poetica la psicologia ma non solo.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9788831671279"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "8831671278"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Poetry"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.1.1.0.preview.3",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=o0DhDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=o0DhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "it",
                "previewLink": "http://books.google.it/books?id=o0DhDwAAQBAJ&pg=PP2&dq=flowers&hl=&as_brr=6&cd=2&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=o0DhDwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=o0DhDwAAQBAJ"
            },
            "saleInfo": {
                "country": "IT",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 1.49,
                    "currencyCode": "EUR"
                },
                "retailPrice": {
                    "amount": 1.49,
                    "currencyCode": "EUR"
                },
                "buyLink": "https://play.google.com/store/books/details?id=o0DhDwAAQBAJ&rdid=book-o0DhDwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 1490000,
                            "currencyCode": "EUR"
                        },
                        "retailPrice": {
                            "amountInMicros": 1490000,
                            "currencyCode": "EUR"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "IT",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=o0DhDwAAQBAJ&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Mattia Regalia. Mattia Regalia <b>Flowers</b> TITOLO | <b>Flowers</b> AUTORE | Mattia <br>\nRegalia ISBN | 978-88-31671-27-9."
            }
        },
        {
            "kind": "books#volume",
            "id": "OyVaDwAAQBAJ",
            "etag": "AAFgYbAkVfE",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/OyVaDwAAQBAJ",
            "volumeInfo": {
                "title": "Iron Flowers",
                "subtitle": "Solo il coraggio di una donna può cambiare il mondo",
                "authors": [
                    "Tracy Banghart"
                ],
                "publisher": "De Agostini",
                "publishedDate": "2018-05-29T00:00:00+02:00",
                "description": "Audace, potente, magnifico. Un fantasy imperdibile, romantico come The Selection e brutale come Il racconto dell’ancella. Non tutte le prigioni hanno le sbarre. In un mondo governato dagli uomini, in cui le donne non hanno alcun diritto, due sorelle non potrebbero essere più diverse l’una dall’altra. Nomi è testarda e indisciplinata. Serina è gentile e romantica, e sin da piccola è stata istruita per essere un esempio di femminilità, eleganza e sottomissione. Sono queste le doti richieste per diventare una Grazia, una delle mogli dell’erede al trono. Ma il giorno in cui le ragazze si recano nella capitale del Regno, pronte a conoscere il loro futuro, accade qualcosa di inaspettato che cambierà per sempre le loro vite. Perché, contro ogni previsione, è proprio l’indomabile Nomi a essere scelta come compagna del principe, e non Serina. E mentre per Nomi inizia una vita a palazzo, tra sfarzo e pericolosi intrighi di corte, sua sorella, accusata di tradimento per aver mostrato di saper leggere, viene confinata sull’isola di Monte Rovina, un carcere di donne ribelli in cui, per sopravvivere, bisogna combattere e uccidere. È cosi che entrambe si trovano prigioniere, l’una di una gabbia dorata e l’altra di una trappola infernale. Per le due sorelle la fuga è impossibile: un solo errore potrebbe significare la morte. E allora, quando non c’è soluzione, l’unica soluzione è cambiare le regole. Un romanzo ribelle, all’insegna del girl power. Una storia che spinge a dire basta e a reagire. Perché nessuno ha il diritto di decidere per te.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9788851163495"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "8851163499"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 384,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.3.5.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=OyVaDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=OyVaDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "it",
                "previewLink": "http://books.google.it/books?id=OyVaDwAAQBAJ&pg=PT317&dq=flowers&hl=&as_brr=6&cd=3&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=OyVaDwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=OyVaDwAAQBAJ"
            },
            "saleInfo": {
                "country": "IT",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 6.99,
                    "currencyCode": "EUR"
                },
                "retailPrice": {
                    "amount": 6.99,
                    "currencyCode": "EUR"
                },
                "buyLink": "https://play.google.com/store/books/details?id=OyVaDwAAQBAJ&rdid=book-OyVaDwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 6990000,
                            "currencyCode": "EUR"
                        },
                        "retailPrice": {
                            "amountInMicros": 6990000,
                            "currencyCode": "EUR"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "IT",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/Iron_Flowers-sample-epub.acsm?id=OyVaDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/Iron_Flowers-sample-pdf.acsm?id=OyVaDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=OyVaDwAAQBAJ&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "L&#39;attesissimo seguito di Iron <b>Flowers</b>: il capitolo conclusivo di una serie <br>\nstraordinariamente attuale che parla di libertà, di sorellanza, di resilienza e, <br>\nsoprattutto, di femminismo. Leggi il primo capitolo di Iron <b>Flowers</b>. Regina di <br>\ncenere 1&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "daHuJgRmXT0C",
            "etag": "CAltDXbwtwg",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/daHuJgRmXT0C",
            "volumeInfo": {
                "title": "Piante, fiori e profumi della Bibbia-Plants, flowers and scents of Bible. Ediz. italiana e inglese",
                "subtitle": "",
                "authors": [
                    "Mariella Zoppi"
                ],
                "publisher": "Alinea Editrice",
                "publishedDate": "2008",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9788860553478"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "8860553474"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 120,
                "printType": "BOOK",
                "categories": [
                    "Bibles"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.0.2.0.preview.3",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=daHuJgRmXT0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=daHuJgRmXT0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "it",
                "previewLink": "http://books.google.it/books?id=daHuJgRmXT0C&pg=PA86&dq=flowers&hl=&as_brr=6&cd=4&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=daHuJgRmXT0C&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=daHuJgRmXT0C"
            },
            "saleInfo": {
                "country": "IT",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 7.8,
                    "currencyCode": "EUR"
                },
                "retailPrice": {
                    "amount": 5.3,
                    "currencyCode": "EUR"
                },
                "buyLink": "https://play.google.com/store/books/details?id=daHuJgRmXT0C&rdid=book-daHuJgRmXT0C&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 7800000,
                            "currencyCode": "EUR"
                        },
                        "retailPrice": {
                            "amountInMicros": 5300000,
                            "currencyCode": "EUR"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "IT",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/Piante_fiori_e_profumi_della_Bibbia_Plan-sample-epub.acsm?id=daHuJgRmXT0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/Piante_fiori_e_profumi_della_Bibbia_Plan-sample-pdf.acsm?id=daHuJgRmXT0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=daHuJgRmXT0C&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "The field&#39;s <b>flowers</b> are often mentioned in both the Old and the New Testament. In <br>\nmost of the cases they have a symbolic meaning: the dried herb and the withered <br>\n<b>flower</b> are the paradigm of grace and beauty which vanishes rapidly as it is&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "fiBbdJ1sdA8C",
            "etag": "c7rBCfBL7B8",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/fiBbdJ1sdA8C",
            "volumeInfo": {
                "title": "The Language of Flowers",
                "subtitle": "A History",
                "authors": [
                    "Beverly Seaton"
                ],
                "publisher": "University of Virginia Press",
                "publishedDate": "2012-10-10",
                "description": "The author traces the phenomenon of ascribing sentimental meaning to floral imagery from its beginnings in Napoleonic France through its later transformations in England and America. At the heart of the book is a depiction of what the three most important flower books from each of the countries divulge about the period and the respective cultures. Seaton shows that the language of flowers was not a single and universally understood correlation of flowers to meanings that men and women used to communicate in matters of love and romance. The language differs from book to book, country to country. To place the language of flowers in social and literary perspective, the author examines the nineteenth-century uses of flowers in everyday life and in ceremonies and rituals and provides a brief history of floral symbolism. She also discusses the sentimental flower book, a genre especially intended for female readers. Two especially valuable features of the book are its table of correlations of flowers and their meanings from different sourcebooks and its complete bibliography of language of flower titles. This book will appeal not only to scholars in Victorian studies and women's studies but also to art historians, book collectors, museum curators, historians of horticulture, and anyone interested in nineteenth-century popular culture.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "0813934532"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9780813934532"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 234,
                "printType": "BOOK",
                "categories": [
                    "Literary Criticism"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "2.1.2.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=fiBbdJ1sdA8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=fiBbdJ1sdA8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.it/books?id=fiBbdJ1sdA8C&pg=PA61&dq=flowers&hl=&as_brr=6&cd=5&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=fiBbdJ1sdA8C&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=fiBbdJ1sdA8C"
            },
            "saleInfo": {
                "country": "IT",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 24.33,
                    "currencyCode": "EUR"
                },
                "retailPrice": {
                    "amount": 17.03,
                    "currencyCode": "EUR"
                },
                "buyLink": "https://play.google.com/store/books/details?id=fiBbdJ1sdA8C&rdid=book-fiBbdJ1sdA8C&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 24330000,
                            "currencyCode": "EUR"
                        },
                        "retailPrice": {
                            "amountInMicros": 17030000,
                            "currencyCode": "EUR"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "IT",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/The_Language_of_Flowers-sample-pdf.acsm?id=fiBbdJ1sdA8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=fiBbdJ1sdA8C&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "For there is no Height in which there are not <b>flowers</b>. For <b>flowers</b> have great <br>\nvirtues for all the senses. For the <b>flower</b> glorifies God and the root parries the <br>\nadversary. For <b>flowers</b> have their angels even the words of (Chris- /-&#39; j&gt; „• topher <br>\nGod 5&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "ziWoDwAAQBAJ",
            "etag": "E8D7w5HjHFk",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/ziWoDwAAQBAJ",
            "volumeInfo": {
                "title": "Iron Flowers. Regina di cenere",
                "authors": [
                    "Tracy Banghart"
                ],
                "publisher": "DeA Planeta Libri",
                "publishedDate": "2019-09-10T00:00:00+02:00",
                "description": "A volte bisogna ridurre il mondo in cenere per costruirne uno migliore. Se c’è una cosa che Nomi ha imparato durante i mesi trascorsi a corte è che non bisogna arrendersi mai. Nemmeno quando tutto sembra perduto. Nemmeno quando Malachi, l’uomo che ama più di se stessa e legittimo erede al trono, viene spodestato dal fratello minore e bandito dal regno. Disperata, Nomi sa che le rimane un’unica speranza: raggiungere la sorella Serina nella prigione di Monte Rovina. Ma al suo arrivo non trova ad aspettarla le donne vinte e ferite che ha sempre immaginato. Perché le prigioniere di Monte Rovina si sono ribellate: alle loro ingiuste condanne, al loro ingiusto destino di donne. E Serina, la dolce, remissiva Serina, è il capo della rivolta. Il dolore, la violenza e la sofferenza hanno cambiato sia Nomi che Serina, eppure le sorelle sono pronte a combattere l’una al fianco dell’altra. Per liberarsi dell’usurpatore e per ristabilire la giustizia – e l’uguaglianza – in tutto il regno. Perché, a volte, per costruire un mondo migliore bisogna prima ridurre tutto in cenere. L’attesissimo seguito di Iron Flowers: il capitolo conclusivo di una serie straordinariamente attuale che parla di libertà, di sorellanza, di resilienza e, soprattutto di femminismo. «La perfetta risposta young adult al Racconto dell’Ancella.» - Booklist «Tracy Banghart regala una nuova vita alla storia femminista di oppressione e resistenza.» - Publishers Weekly",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9788851173531"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "8851173532"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 384,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.3.2.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=ziWoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=ziWoDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "it",
                "previewLink": "http://books.google.it/books?id=ziWoDwAAQBAJ&pg=PP1&dq=flowers&hl=&as_brr=6&cd=6&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=ziWoDwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=ziWoDwAAQBAJ"
            },
            "saleInfo": {
                "country": "IT",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 7.99,
                    "currencyCode": "EUR"
                },
                "retailPrice": {
                    "amount": 7.99,
                    "currencyCode": "EUR"
                },
                "buyLink": "https://play.google.com/store/books/details?id=ziWoDwAAQBAJ&rdid=book-ziWoDwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 7990000,
                            "currencyCode": "EUR"
                        },
                        "retailPrice": {
                            "amountInMicros": 7990000,
                            "currencyCode": "EUR"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "IT",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/Iron_Flowers_Regina_di_cenere-sample-epub.acsm?id=ziWoDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/Iron_Flowers_Regina_di_cenere-sample-pdf.acsm?id=ziWoDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=ziWoDwAAQBAJ&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "L’attesissimo seguito di Iron Flowers: il capitolo conclusivo di una serie straordinariamente attuale che parla di libertà, di sorellanza, di resilienza e, soprattutto di femminismo. «La perfetta risposta young adult al Racconto ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "syRnHs15XrwC",
            "etag": "2j/rx/OqTZk",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/syRnHs15XrwC",
            "volumeInfo": {
                "title": "Flowers for Algernon Lit Link Gr. 7-8",
                "publisher": "On The Mark Press",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781770721982"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1770721983"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Education"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=syRnHs15XrwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=syRnHs15XrwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.it/books?id=syRnHs15XrwC&pg=PA25&dq=flowers&hl=&as_brr=6&cd=7&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=syRnHs15XrwC&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=syRnHs15XrwC"
            },
            "saleInfo": {
                "country": "IT",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 8.48,
                    "currencyCode": "EUR"
                },
                "retailPrice": {
                    "amount": 5.77,
                    "currencyCode": "EUR"
                },
                "buyLink": "https://play.google.com/store/books/details?id=syRnHs15XrwC&rdid=book-syRnHs15XrwC&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 8480000,
                            "currencyCode": "EUR"
                        },
                        "retailPrice": {
                            "amountInMicros": 5770000,
                            "currencyCode": "EUR"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "IT",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/Flowers_for_Algernon_Lit_Link_Gr_7_8-sample-pdf.acsm?id=syRnHs15XrwC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=syRnHs15XrwC&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Static and Dynamic Characters - A Conclusion: <b>Flowers</b> for Algernon is <br>\nessentially a novel about the changes and development which occur in one <br>\ncharacter, Charlie Gordon, as he undergoes an experiment to change his <br>\nintelligence. Thus&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "WZ2Dqb42exQC",
            "etag": "NOKvaiJTY/8",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/WZ2Dqb42exQC",
            "volumeInfo": {
                "title": "Interpretative Phenomenological Analysis",
                "subtitle": "Theory, Method and Research",
                "authors": [
                    "Jonathan A Smith",
                    "Paul Flowers",
                    "Michael Larkin"
                ],
                "publisher": "SAGE",
                "publishedDate": "2009-05-21",
                "description": "'It is not often I can use \"accessible\" and \"phenomenology\" in the same sentence, but reading the new book, Interpretative Phenomenological Analysis...certainly provides me the occasion to do so. I can say this because these authors provide an engaging and clear introduction to a relatively new analytical approach' - The Weekly Qualitative Report Interpretative phenomenological analysis (IPA) is an increasingly popular approach to qualitative inquiry. This handy text covers its theoretical foundations and provides a detailed guide to conducting IPA research. Extended worked examples from the authors' own studies in health, sexuality, psychological distress and identity illustrate the breadth and depth of IPA research. Each of the chapters also offers a guide to other good exemplars of IPA research in the designated area. The final section of the book considers how IPA connects with other contemporary qualitative approaches like discourse and narrative analysis and how it addresses issues to do with validity. The book is written in an accessible style and will be extremely useful to students and researchers in psychology and related disciplines in the health and social sciences.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "1446243257"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9781446243251"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 232,
                "printType": "BOOK",
                "categories": [
                    "Social Science"
                ],
                "maturityRating": "MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.11.11.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=WZ2Dqb42exQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=WZ2Dqb42exQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.it/books?id=WZ2Dqb42exQC&printsec=frontcover&dq=flowers&hl=&as_brr=6&cd=8&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=WZ2Dqb42exQC&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=WZ2Dqb42exQC"
            },
            "saleInfo": {
                "country": "IT",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 32.18,
                    "currencyCode": "EUR"
                },
                "retailPrice": {
                    "amount": 32.18,
                    "currencyCode": "EUR"
                },
                "buyLink": "https://play.google.com/store/books/details?id=WZ2Dqb42exQC&rdid=book-WZ2Dqb42exQC&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 32180000,
                            "currencyCode": "EUR"
                        },
                        "retailPrice": {
                            "amountInMicros": 32180000,
                            "currencyCode": "EUR"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "IT",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/Interpretative_Phenomenological_Analysis-sample-epub.acsm?id=WZ2Dqb42exQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/Interpretative_Phenomenological_Analysis-sample-pdf.acsm?id=WZ2Dqb42exQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=WZ2Dqb42exQC&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "This handy text covers its theoretical foundations and provides a detailed guide to conducting IPA research."
            }
        },
        {
            "kind": "books#volume",
            "id": "Iv8j2QkMNM8C",
            "etag": "nti7DvmkgUs",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/Iv8j2QkMNM8C",
            "volumeInfo": {
                "title": "The Flower Farmer",
                "subtitle": "An Organic Grower's Guide to Raising and Selling Cut Flowers, 2nd Edition",
                "authors": [
                    "Lynn Byczynski"
                ],
                "publisher": "Chelsea Green Publishing",
                "publishedDate": "2008-02-22",
                "description": "The domestic cut flower business has experienced a renaissance in the past decade, thanks in large part to the first edition of The Flower Farmer: An Organic Grower’s Guide to Raising and Selling Cut Flowers, which helped thousands of small growers start successful businesses. This newly expanded and thoroughly revised edition will be equally as influential for novices and experienced growers alike. With the cut flower business growing at record rates, demand is at all time highs, challenging growers to take advantage of new techniques to prolong the harvest. New sections on utilizing greenhouses, recommendations for flower cultivars, and post harvest handling growers throughout all of North America will help improve their bottom line. Also updated is the acclaimed resource directory, complete with sources of seeds, plants and supplies, and expert information on organic production under the National Organic Program. For the beginner and backyard gardener, there is an extensive section on the basics—variety selection, soil preparation, planting, cultivation, harvest, and floral design. For the commercial grower, The Flower Farmer includes information about larger-scale production, plus advice about selling to florists, wholesalers, supermarkets, brides, at farmers markets, and more. Also includes revised profiles of successful growers offering behind-the-scenes insight into the operation of some of the cutting edge flower farmers in the country. Because of the extensive revisions and enhanced content, this new edition of The Flower Farmer is essential reading for those already in the flower business, as well as those who dream of growing flowers for enjoyment or profit.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781603580762"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "160358076X"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 284,
                "printType": "BOOK",
                "categories": [
                    "Gardening"
                ],
                "averageRating": 5,
                "ratingsCount": 3,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "2.2.2.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=Iv8j2QkMNM8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=Iv8j2QkMNM8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.it/books?id=Iv8j2QkMNM8C&pg=PA133&dq=flowers&hl=&as_brr=6&cd=9&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=Iv8j2QkMNM8C&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=Iv8j2QkMNM8C"
            },
            "saleInfo": {
                "country": "IT",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 27.66,
                    "currencyCode": "EUR"
                },
                "retailPrice": {
                    "amount": 27.66,
                    "currencyCode": "EUR"
                },
                "buyLink": "https://play.google.com/store/books/details?id=Iv8j2QkMNM8C&rdid=book-Iv8j2QkMNM8C&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 27660000,
                            "currencyCode": "EUR"
                        },
                        "retailPrice": {
                            "amountInMicros": 27660000,
                            "currencyCode": "EUR"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "IT",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/The_Flower_Farmer-sample-epub.acsm?id=Iv8j2QkMNM8C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/The_Flower_Farmer-sample-pdf.acsm?id=Iv8j2QkMNM8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=Iv8j2QkMNM8C&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "An Organic Grower&#39;s Guide to Raising and Selling Cut <b>Flowers</b>, 2nd Edition Lynn <br>\nByczynski. open in the vase. Delphinium, larkspur, gladiolus, and snapdragon <br>\nare examples of spike <b>flowers</b> that open from the bottom to the top; they should <br>\nbe&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "H7G3ie8Xf_oC",
            "etag": "clWdtAXNIlE",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/H7G3ie8Xf_oC",
            "volumeInfo": {
                "title": "Favored Flowers",
                "subtitle": "Culture and Economy in a Global System",
                "authors": [
                    "Catherine Ziegler"
                ],
                "publisher": "Duke University Press",
                "publishedDate": "2007-06-19",
                "description": "Billions of fresh-cut flowers are flown into the United States every year, allowing Americans to choose from a broad array of blooms regardless of the season. Favored Flowers is a lively investigation of the worldwide production and distribution of fresh-cut flowers and their consumption in the New York metropolitan area. In an ethnography filled with roses, orchids, and gerberas, flower auctions, new hybrids, and new logistical systems, Catherine Ziegler unravels the economic and cultural strands of the global flower market. She provides an historical overview of the development of the cut flower industry in New York from the late nineteenth century to 1970, and on to its ultimate transformation from a domestic to a global industry. As she points out, cut flowers serve no utilitarian purpose; rather, they signal consumers’ social and cultural decisions about expressing love, mourning, status, and identity. Ziegler shows how consumer behavior and choices have changed over time and how they are shaped by the media, by the types of available flowers, and by flower retailing. Ziegler interviewed more than 250 people as she followed flowers along the full length of the commodity chain, from cuttings in Europe and Latin America to vases in and around New York. She examines the daily experiences of flower growers in the Netherlands and Ecuador, two leading exporters of flowers to the United States. Primary focus, though, is on others in the commodity chain: exporters, importers, wholesalers, and retailers. She follows their activities as they respond to changing competition, supply, and consumer behavior in a market characterized by risk, volatility, and imperfect knowledge. By tracing changes in the wholesale and retail systems, she shows the recent development of two complementary commodity chains in New York and the United States generally. One leads to a high-end luxury market served by specialty florists and designers, and the other to a lower-priced mass market served by chain groceries, corner delis, and retail superstores.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9780822390015"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0822390019"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 320,
                "printType": "BOOK",
                "categories": [
                    "Social Science"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=H7G3ie8Xf_oC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=H7G3ie8Xf_oC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.it/books?id=H7G3ie8Xf_oC&pg=PT7&dq=flowers&hl=&as_brr=6&cd=10&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=H7G3ie8Xf_oC&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=H7G3ie8Xf_oC"
            },
            "saleInfo": {
                "country": "IT",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 24.73,
                    "currencyCode": "EUR"
                },
                "retailPrice": {
                    "amount": 17.31,
                    "currencyCode": "EUR"
                },
                "buyLink": "https://play.google.com/store/books/details?id=H7G3ie8Xf_oC&rdid=book-H7G3ie8Xf_oC&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 24730000,
                            "currencyCode": "EUR"
                        },
                        "retailPrice": {
                            "amountInMicros": 17310000,
                            "currencyCode": "EUR"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "IT",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.it/books/download/Favored_Flowers-sample-pdf.acsm?id=H7G3ie8Xf_oC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=H7G3ie8Xf_oC&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Within the <b>flower</b> industry I have many more debts. Gary Page has helped me <br>\nrepeatedly. He and Jaap Kras opened many doors in distant places. My thanks <br>\ngo also to Jaap and Cindy Long for their illuminating conversations. Henri van <br>\nder&nbsp;..."
            }
        }
    ]
}

function googleBooks(searchVal) {
    if (!searchVal) searchVal = 'flowers'
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchVal}&filter=paid-ebooks`)
        .then(res => {
            return res.data.items
        })
}

function getGoogleBook(val) {
    return googleBooks(val)
        .then(books => {
            var filteredBooks = books.map(book => {
                return {
                    id: book.id,
                    title: book.volumeInfo.title,
                    subtitle: book.volumeInfo.subtitle,
                    authors: book.volumeInfo.authors,
                    categories: book.volumeInfo.categories,
                    price: book.saleInfo.listPrice.amount,
                    currencyCode: book.saleInfo.listPrice.currencyCode,
                    publishDate: book.volumeInfo.publishedDate,
                    description: book.volumeInfo.description,
                    pageCount: book.volumeInfo.pageCount,
                    language: book.volumeInfo.language,
                    imgUrl: book.volumeInfo.imageLinks.thumbnail,
                    reviews: []
                }
            })
            return filteredBooks
        })
}

var gBooks;
_loadBooks()
function _loadBooks() {
    var books = utilService.loadFromStorage('booksDB');
    if (!books) {
        googleBooks()
            .then(books => {
                var filteredBooks = books.map(book => {
                    return {
                        id: book.id,
                        title: book.volumeInfo.title,
                        subtitle: book.volumeInfo.subtitle,
                        authors: book.volumeInfo.authors,
                        categories: book.volumeInfo.categories,
                        price: book.saleInfo.listPrice.amount,
                        currencyCode: book.saleInfo.listPrice.currencyCode,
                        publishDate: book.volumeInfo.publishedDate,
                        description: book.volumeInfo.description,
                        pageCount: book.volumeInfo.pageCount,
                        language: book.volumeInfo.language,
                        imgUrl: book.volumeInfo.imageLinks.thumbnail,
                        reviews: []
                    }
                })
                gBooks = filteredBooks
                saveBooks()
            })
        return gBooks
    }
    gBooks = books
    return gBooks
}

function getNegBookId(bookId, diff) {
    const idx = gBooks.findIndex(book => book.id === bookId)
    var negIdx = idx + diff
    negIdx = (negIdx < 0) ? gBooks.length - 1 : (negIdx === gBooks.length) ? 0 : negIdx;
    return gBooks[negIdx].id;
}

function getBooks() {
    return Promise.resolve(gBooks)
}

function getById(id) {
    const book = gBooks.find(book => book.id === id)
    return Promise.resolve(book)
}

function addBookToShop(book) {
    gBooks.unshift(book)
    saveBooks()
    return gBooks
}

function saveBooks() {
    utilService.storeToStorage('booksDB', gBooks)
}

function addReview(review, bookId) {
    var currBook;
    return getById(bookId)
        .then(book => {
            currBook = book;
            if (!currBook.reviews) currBook.reviews = [];
            currBook.reviews.push(review);
            saveBooks()
        })
}