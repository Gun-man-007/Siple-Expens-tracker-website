$(document).ready(function() {
  $('#addExpense').click(function(event) {
    event.preventDefault();
    const name = $('#name').val();
    const amount = $('#amount').val();

    $.ajax({
      type: 'POST',
      url: '/addExpense', // Send the expense data to this endpoint
      data: { name, amount },
      success: function(response) {
        $('#expenseList').append('<tr><td>' + name + '</td><td>' + amount + '</td></tr>');
        $('#updatedBal').text(response.totalAmount);
        $('#name').val('');
        $('#amount').val('');
      },
      error: function(err) {
        console.error('Error adding expense: ', err);
      }
    });
  });
});
