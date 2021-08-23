// custom API caller

export const fetchData = <T = any>(url: string, options?: Record<string, string>): Promise<T> => {
    return fetch(url, options).then(response => response.json())
}