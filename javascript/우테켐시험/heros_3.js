function solution(reqs) {
    let answer = [];
    let database = {};
    reqs.forEach(r => {
        const req = r.split(" ");
        let status;
        switch (req[0]) {
            case "CREATE":
                status = create(req.slice(1), database);
                break;
            case "DEPOSIT":
                status = deposit(req.slice(1), database);
                break;
            case "WITHDRAW":
                status = withdraw(req.slice(1), database);
                break;
        }
        answer.push(status);
    });
    return answer;
}

function create([userId, limit], database) {
    if (Object.keys(database).includes(userId)) return 403;

    const account = {
        minus_limit: - (parseInt(limit)),
        balance: 0
    }

    database[userId] = account;
    return 200;
}

function deposit([userId, amount], database) {
    if (!(Object.keys(database).includes(userId))) return 404;
    database[userId].balance += parseInt(amount);
    return 200;
}

function withdraw([userId, amount], database) {
    if (!(Object.keys(database).includes(userId))) return 404;
    const user = database[userId];
    if ((user.balance - parseInt(amount) < user.minus_limit)) return 403;
    database[userId].balance -= parseInt(amount);
    return 200;
}

const request = [[
    "DEPOSIT 3a 10000",
    "CREATE 3a 300000",
    "WITHDRAW 3a 150000",
    "WITHDRAW 3a 150001"
], ["CREATE 3a 10000",
    "CREATE 3a 20000",
    "CREATE 2bw 30000"
]];

request.forEach(req => solution(req));