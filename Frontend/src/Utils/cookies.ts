export function getCookie(cname:string) :string {
    const cookie = document.cookie.split(';')
                    .map(cookie => cookie.trim())
                    .filter(cookie => cookie.substring(0, cname.length) === `${cname}`)
                    .map(cookie => decodeURIComponent(cookie.substring(cname.length+1)))[0];
    return cookie || '';
}