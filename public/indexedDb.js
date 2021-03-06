// export function checkForIndexedDb() {
//     if (!window.indexedDB) {
//       console.log("Your browser doesn't support a stable version of IndexedDB.");
//       return false;
//     }
//     return true;
//   }
  
//   export function useIndexedDb(budgetDatabase, budgetStore, method, object) {
//     return new Promise((resolve, reject) => {
//       const request = window.indexedDB.open(budgetDatabase, 1);
//       let db,
//         tx,
//         store;
  
//       request.onupgradeneeded = function(e) {
//         const db = request.result;
//         db.createObjectStore(budgetStore, { keyPath: "_id" });
//       };
  
//       request.onerror = function(e) {
//         console.log("There was an error");
//       };
  
//       request.onsuccess = function(e) {
//         db = request.result;
//         tx = db.transaction(budgetStore, "readwrite");
//         store = tx.objectStore(budgetStore);
  
//         db.onerror = function(e) {
//           console.log("error");
//         };
//         if (method === "put") {
//           store.put(object);
//         } else if (method === "get") {
//           const all = store.getAll();
//           all.onsuccess = function() {
//             resolve(all.result);
//           };
//         } else if (method === "delete") {
//           store.delete(object._id);
//         }
//         tx.oncomplete = function() {
//           db.close();
//         };
//       };
//     });
//   }
  