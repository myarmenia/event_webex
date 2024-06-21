
 export function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}




export const customBasesUrlFunc = (params1) => {
    const params = new URLSearchParams(window.location.search);
    const resObj = {};
 
    const baseUrl = window.location.origin + window.location.pathname;
    resObj.baseUrl = baseUrl;
 
    for (const param of params) {
       resObj[param[0]] = param[1];
    }
    return resObj;
 };
 

