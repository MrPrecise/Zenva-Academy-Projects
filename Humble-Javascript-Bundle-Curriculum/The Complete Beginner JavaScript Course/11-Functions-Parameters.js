var currentHealth = 50;

function heal(healAmount = 10) {
    currentHealth += healAmount;
}

heal(); // currentHealth = 60
heal(40); // currentHealth = 100