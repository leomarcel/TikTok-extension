let Volume;

function addControls() {
    let elementsVideos = document.querySelectorAll('.video-player');
    for (let elementsVideo of elementsVideos) {
        elementsVideo.setAttribute("controls", true);
        elementsVideo.addEventListener("volumechange", function() {
            Volume = elementsVideo.volume
        });
        try { elementsVideo.volume = Volume } catch (error) { }
    }

    const mask = (elms) => elms.forEach(el => el.style.height = "80%");
    mask( document.querySelectorAll('.event-delegate-mask') );

    let removeElementsIs=[".style-layer-mask", '.toggle-icon', '.mute-icon', '.toggle-icon-v4', '.mute-icon', '.play-button']

    removeElementsIs.forEach(classElement => {
        const ghostElements = (elms) => elms.forEach(el => el.style.display = "none");
        ghostElements( document.querySelectorAll(classElement) );
    })
}

addControls()

document.body.addEventListener('DOMNodeInserted',function() { addControls() }, false);