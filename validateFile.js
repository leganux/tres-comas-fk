let validateFile = function (file) {

    file = file.toString()
    let type = 'video'
    if (file.includes('.pdf')) {
        type = 'pdf'
    }

    if (file.includes('.png') || file.includes('.jpg') || file.includes('.jpeg') || file.includes('.webp')) {
        type = 'image'
    }

    return type
}

module.exports = {
    validateFile
}