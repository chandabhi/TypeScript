// enum Role {
//     Admin,
//     Editor,
//     Guest
// }

// let userRole : Role = Role.Admin;

// userRole = Role.Guest

// Another way of doing the same thiing done in enum

// let userRole : 'admin' | 'guest' | 'editor' = 'admin';

// userRole = 'guest'

// let possibleresults : [1|-1,-1|1];
// possibleresults=[1,-1]; 

//  If you want to use Role  to sole function so we just can't type "let userRole : 'admin' | 'guest' | 'editor' = 'admin' " again and again so easier way is to store it inside one data type

type  Role = 'admin' | 'guest' | 'editor' ;

function access(role:Role){
    // ......
}





