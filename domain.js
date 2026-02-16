const getDomainInfo = (domain) => {
    let scheme = 'http';
    if (domain.startsWith('https://')) {
    scheme = 'https';
    }
    const name = domain.replace('http://', '').replace('https://', '');
    return { scheme, name };
};

// Использование функции (подставляем ссылку здесь)
const info = getDomainInfo('https://yandex.ru');

console.log(info);