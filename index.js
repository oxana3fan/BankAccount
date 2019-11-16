var balance = (function() {
    var currentBalance = 1322.22;
    
    return {
      add: function() {
        currentBalance += parseInt(document.getElementById("add").value);
        return currentBalance;
      },
      remove: function() {
        currentBalance -= parseInt(document.getElementById("remove").value);
        return currentBalance;
      },
      value: function() {
        document.getElementById("balance").innerHTML = 'Balance: ' + currentBalance;
      }
    };
  })();

  function updateBalance() {
      balance.add();
      balance.remove();
  }

balance.value();
