export default async function handler(request, response) {
    response.setHeader(
        "Set-Cookie",
        [
            "sb-access-token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT",
            "sb-refresh-token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT",
        ]
    )
    response.send({})
}