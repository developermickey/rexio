class Rexio {
    constructor({ baseURL = "", headers = {} } = {}) {
        this.baseURL = baseURL;
        this.globalHeaders = headers;
    }

    async request(method, url, data = null, headers = {}) {
        const requestConfig = {
            method,
            headers: {
                "Content-Type": "application/json",
                ...this.globalHeaders,
                ...headers,
            }
        };

        if (data) {
            requestConfig.body = JSON.stringify(data);
        }

        const response = await fetch(this.baseURL + url, requestConfig);

        if (!response.ok) {
            throw new Error(\`Rexio: Request failed with status \${response.status}\`);
        }

        try {
            return await response.json();
        } catch {
            return await response.text();
        }
    }

    get(url, headers = {}) { return this.request("GET", url, null, headers); }
    post(url, data, headers = {}) { return this.request("POST", url, data, headers); }
    put(url, data, headers = {}) { return this.request("PUT", url, data, headers); }
    patch(url, data, headers = {}) { return this.request("PATCH", url, data, headers); }
    delete(url, headers = {}) { return this.request("DELETE", url, null, headers); }
}

export default Rexio;