var maxHealth = 100;
var currentHealth = 50;

function heal(healAmount = 10) {
    var newHealth = currentHealth += healAmount;
    currentHealth = newHealth > 100 ? maxHealth : newHealth;
    return (currentHealth / maxHealth) * 100;
}

var result = heal(); // currentHealth = 60, results = 60
result = heal(50); // currentHealth = 100, result = 100