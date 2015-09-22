/**
 * Created by anne_bione on 21/09/2015.
 */
function UserController($stateProvider, $location, UserService) {

  var vm = this;
  var userInsert = UserSerice.createUser;
  var userControl = UserService.userFactory;


  vm.createUser = function () {
    userInsert.create(vm.user);
    $location.path('/users');
  };

  vm.updateUser = function () {
   userControl.update(vm.user);
    $location.path('/users');
  };

  vm.editUser = function (userId) {
    $location.path('/users/' + userId);
  };


  vm.deleteUser = function() {
    userControl.delete({ id: userId });
    vm.users = userControl.query();
  };


  /*UserService.getUser(data).then(function(data) {
      var result = data.data.result;
      console.log(data);
  }); */

}
angular.module('beecambioBo').controller('UserController', UserController);
