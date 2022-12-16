$(document).ready(function() {
    $('.deleteUser').on('click', deleteUser);
});

function deleteUser() {
    var confirmation = confirm('Are you sure?');

    if(confirmation) {
        $.ajax({
            type: 'DELETE',
            url: '/users/delete/'+$(this).data('id')
        }).done(function(response) {
            window.location.replace('/users/show');
        });
        window.location.replace('/users/show');
    } else {
        return false;
    }
}