const capitalize = (string) => {
    if (typeof (string) === 'string') return string.charAt(0).toUpperCase().concat(string.slice(1))
    return ''
}

export default capitalize