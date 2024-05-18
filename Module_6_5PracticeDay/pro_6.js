var friends = ["rahim", "karim", "abdul", "sadsdrakib", "heroAlom"];
let n = friends.length
let bigName = friends[0]
for (let i = 0; i < n; i++) {
    if (bigName.length < friends[i].length) {
        bigName = friends[i]
    }
}

console.log(`big name owala bondu ${bigName}`)