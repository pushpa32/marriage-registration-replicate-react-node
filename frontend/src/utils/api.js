const BASE_URl = window.location.href.startsWith("http://localhost")
    ? "http://localhost:5000/api/"
    : "api/";

    export const Main_URL = "http://localhost:5000"

// Login
export const loginApiCall = async (apiEndpoints, sendData) => {

    console.log(apiEndpoints);
    console.log(sendData);
    return await fetch(BASE_URl + apiEndpoints, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData)
    })
        .then(async response => {
            // console.log(response);
            if (response.status !== 200) {
                throw new Error("Not 200");
            } else {
                return await response.json();
            }
        })
        .then(data => {
            // console.log("DATA", data);
            return data;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}

export const getApiCall = async (apiEndpoints) => {
    return await fetch(BASE_URl + apiEndpoints, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}`
        },
    })
        .then(async response => {
            // console.log(response);
            if (response.status !== 200) {
                throw new Error("Not 200");
            } else {
                return await response.json();
            }
        })
        .then(data => {
            // console.log("DATA", data);
            return data;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });

}

export const postApiCall = async (apiEndpoints, sendData) => {
    return await fetch(BASE_URl + apiEndpoints, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(sendData)
    })
        .then(async response => {
            // console.log(response);
            if (response.status !== 200) {
                throw new Error("Not 200");
            } else {
                return await response.json();
            }
        })
        .then(data => {
            // console.log("DATA", data);
            return data;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}

export const postFormApiCall = async (apiEndpoints, sendData) => {
    // if (await checkExpirationToken() === false) {
    return await fetch(BASE_URl + apiEndpoints, {
        method: "POST",
        headers: {
            // "Content-Type": "multipart/form-data",
            // "Authorization": `Bearer ${token}`
        },
        body: sendData
    })
        .then(async response => {
            // console.log(response);
            if (response.status !== 200) {
                throw new Error("Not 200");
            } else {
                return await response.json();
            }
        })
        .then(data => {
            // console.log("DATA", data);
            return data;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
    // }
}

// Call for pdf download
export const postCallForPdfDownload = async (apiEndpoints, sendData) => {
    return await fetch(BASE_URl + apiEndpoints, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(sendData)
    })
        .then(async response => {
            // console.log(response);
            if (response.status !== 200) {
                throw new Error("Not 200");
            } else {
                return response;
            }
        })
        .then(data => {
            // console.log("DATA", data);
            return data;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}
