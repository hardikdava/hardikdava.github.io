document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[2],
                hideTexts: false,
                textPosition: "bottom"
            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[3],
                hideTexts: false,
                textPosition: "bottom"
            });
        }



        function objectSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 4
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'resources/360_scan_ablation/100_';
                        break;
                    case 1:
                        image.src = 'resources/360_scan_ablation/200_';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '_gt.png';
                        break;
                    case 1:
                        image.src = image.src + '_raw_app.png';
                        break;
                    case 2:
                        image.src = image.src + '_gt.jpg';
                        break;

                }
            }

        }