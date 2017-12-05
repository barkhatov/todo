// function access(target: object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {
//   descriptor = (typeof descriptor === 'undefined') ? Object.getOwnPropertyDescriptor(target, descriptor) : descriptor;
//
//   const originalMethod: () => {} = descriptor.value;
//
//   descriptor.value = function(...args: any[]): () => {} {
//     console.log("Invoked");
//     const result = originalMethod.apply(this, args);
//
//     return result;
//   };
//
//   return descriptor;
// }
