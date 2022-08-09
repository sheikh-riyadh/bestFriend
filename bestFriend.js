function bestFriend(friends) {
    let bestFriendName = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length > bestFriendName.length) {
            bestFriendName = friends[i];
        }
    }

    return bestFriendName;
}

const bestFriends = ["Anik Hasan", "Najmus Sakib", "Dina", "Anwar Hossain", "Tamzid islam polash"];

const bestFriendName = bestFriend(bestFriends);
console.log(bestFriendName)