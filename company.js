const company1 = { name: 'Hexlet', state: 'moderating', website:
'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website:
'https://code-basics.com' };


function  is(company1, company2) {
    if (company1.name === company2.name && 
        company1.state === company2.state && 
        company1.website === company2.website){
        return true;
    } else {
        return false;
    }
}

console.log(is(company1, company2))