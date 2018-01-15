var sqlMap = {
    // ”√ªß
    user: {
        add: 'insert into goods(id, name, price) values (0, ?, ?)',
        findUser:"select * from goods"
    }
}
module.exports = sqlMap;