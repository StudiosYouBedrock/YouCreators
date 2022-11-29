const conbert64 = (Blob) => {
    return new Promise((resuelve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(Blob);
        reader.onloadend = () => {
            resuelve(reader.result.split(',')[1]);
        };
    });
}


const desconvert64 = async(b64, type) => {
    const Blob = await fetch(`data:${type};base64,${b64}`);
    return Blob;

}

export {
    conbert64,
    desconvert64
}