function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        calculateNumbers: function (var1, var2) {
            console.log(var1 + var2)
        }
    }
    console.log(member.name)
    console.log(member.age)
    member.calculateNumbers(10, 20)
}