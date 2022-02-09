export function customFetch(data, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) resolve(data)
            else reject('Problemas con el Servidor.')
        }, time)
    })
}

