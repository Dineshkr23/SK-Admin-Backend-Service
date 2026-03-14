
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model FormSubmission
 * 
 */
export type FormSubmission = $Result.DefaultSelection<Prisma.$FormSubmissionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formSubmission`: Exposes CRUD operations for the **FormSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormSubmissions
    * const formSubmissions = await prisma.formSubmission.findMany()
    * ```
    */
  get formSubmission(): Prisma.FormSubmissionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AdminUser: 'AdminUser',
    FormSubmission: 'FormSubmission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "adminUser" | "formSubmission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      FormSubmission: {
        payload: Prisma.$FormSubmissionPayload<ExtArgs>
        fields: Prisma.FormSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          findFirst: {
            args: Prisma.FormSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          findMany: {
            args: Prisma.FormSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          create: {
            args: Prisma.FormSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          createMany: {
            args: Prisma.FormSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          delete: {
            args: Prisma.FormSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          update: {
            args: Prisma.FormSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.FormSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.FormSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          aggregate: {
            args: Prisma.FormSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormSubmission>
          }
          groupBy: {
            args: Prisma.FormSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<FormSubmissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    adminUser?: AdminUserOmit
    formSubmission?: FormSubmissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model FormSubmission
   */

  export type AggregateFormSubmission = {
    _count: FormSubmissionCountAggregateOutputType | null
    _avg: FormSubmissionAvgAggregateOutputType | null
    _sum: FormSubmissionSumAggregateOutputType | null
    _min: FormSubmissionMinAggregateOutputType | null
    _max: FormSubmissionMaxAggregateOutputType | null
  }

  export type FormSubmissionAvgAggregateOutputType = {
    legacyId: number | null
  }

  export type FormSubmissionSumAggregateOutputType = {
    legacyId: number | null
  }

  export type FormSubmissionMinAggregateOutputType = {
    id: string | null
    legacyId: number | null
    formType: string | null
    skPassportNo: string | null
    validationOtpGenerated: string | null
    registeringDate: Date | null
    pi_firstName: string | null
    pi_lastName: string | null
    pi_profession: string | null
    pi_dob: string | null
    pi_phone: string | null
    pi_whatsAppNumber: string | null
    pi_emailId: string | null
    pi_addressLane1: string | null
    pi_addressLane2: string | null
    pi_taluk: string | null
    pi_district: string | null
    pi_city: string | null
    pi_state: string | null
    pi_pincode: string | null
    pi_landmark: string | null
    pi_anniversaryDate: string | null
    ref_nameOfTheperson: string | null
    ref_place: string | null
    sod_nameOfTheDealer: string | null
    sod_place: string | null
    photoProofPath: string | null
    idProofPath: string | null
    idProofBackPath: string | null
    isContacted: boolean | null
    isApproved: boolean | null
    isDeleted: boolean | null
    isActive: boolean | null
    isPending: boolean | null
    isRejected: boolean | null
    shop_location: string | null
    shop_Address1: string | null
    shop_Address2: string | null
    shop_District: string | null
    shop_Taluk: string | null
    shop_City: string | null
    shop_Pincode: string | null
    shop_Landmark: string | null
    enteredBy: string | null
    enteredDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    photoProofData: string | null
    idProofData: string | null
    idProofBackData: string | null
  }

  export type FormSubmissionMaxAggregateOutputType = {
    id: string | null
    legacyId: number | null
    formType: string | null
    skPassportNo: string | null
    validationOtpGenerated: string | null
    registeringDate: Date | null
    pi_firstName: string | null
    pi_lastName: string | null
    pi_profession: string | null
    pi_dob: string | null
    pi_phone: string | null
    pi_whatsAppNumber: string | null
    pi_emailId: string | null
    pi_addressLane1: string | null
    pi_addressLane2: string | null
    pi_taluk: string | null
    pi_district: string | null
    pi_city: string | null
    pi_state: string | null
    pi_pincode: string | null
    pi_landmark: string | null
    pi_anniversaryDate: string | null
    ref_nameOfTheperson: string | null
    ref_place: string | null
    sod_nameOfTheDealer: string | null
    sod_place: string | null
    photoProofPath: string | null
    idProofPath: string | null
    idProofBackPath: string | null
    isContacted: boolean | null
    isApproved: boolean | null
    isDeleted: boolean | null
    isActive: boolean | null
    isPending: boolean | null
    isRejected: boolean | null
    shop_location: string | null
    shop_Address1: string | null
    shop_Address2: string | null
    shop_District: string | null
    shop_Taluk: string | null
    shop_City: string | null
    shop_Pincode: string | null
    shop_Landmark: string | null
    enteredBy: string | null
    enteredDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    photoProofData: string | null
    idProofData: string | null
    idProofBackData: string | null
  }

  export type FormSubmissionCountAggregateOutputType = {
    id: number
    legacyId: number
    formType: number
    skPassportNo: number
    validationOtpGenerated: number
    registeringDate: number
    pi_firstName: number
    pi_lastName: number
    pi_profession: number
    pi_dob: number
    pi_phone: number
    pi_whatsAppNumber: number
    pi_emailId: number
    pi_addressLane1: number
    pi_addressLane2: number
    pi_taluk: number
    pi_district: number
    pi_city: number
    pi_state: number
    pi_pincode: number
    pi_landmark: number
    pi_anniversaryDate: number
    ref_nameOfTheperson: number
    ref_place: number
    sod_nameOfTheDealer: number
    sod_place: number
    photoProofPath: number
    idProofPath: number
    idProofBackPath: number
    isContacted: number
    isApproved: number
    isDeleted: number
    isActive: number
    isPending: number
    isRejected: number
    shop_location: number
    shop_Address1: number
    shop_Address2: number
    shop_District: number
    shop_Taluk: number
    shop_City: number
    shop_Pincode: number
    shop_Landmark: number
    enteredBy: number
    enteredDate: number
    createdAt: number
    updatedAt: number
    photoProofData: number
    idProofData: number
    idProofBackData: number
    _all: number
  }


  export type FormSubmissionAvgAggregateInputType = {
    legacyId?: true
  }

  export type FormSubmissionSumAggregateInputType = {
    legacyId?: true
  }

  export type FormSubmissionMinAggregateInputType = {
    id?: true
    legacyId?: true
    formType?: true
    skPassportNo?: true
    validationOtpGenerated?: true
    registeringDate?: true
    pi_firstName?: true
    pi_lastName?: true
    pi_profession?: true
    pi_dob?: true
    pi_phone?: true
    pi_whatsAppNumber?: true
    pi_emailId?: true
    pi_addressLane1?: true
    pi_addressLane2?: true
    pi_taluk?: true
    pi_district?: true
    pi_city?: true
    pi_state?: true
    pi_pincode?: true
    pi_landmark?: true
    pi_anniversaryDate?: true
    ref_nameOfTheperson?: true
    ref_place?: true
    sod_nameOfTheDealer?: true
    sod_place?: true
    photoProofPath?: true
    idProofPath?: true
    idProofBackPath?: true
    isContacted?: true
    isApproved?: true
    isDeleted?: true
    isActive?: true
    isPending?: true
    isRejected?: true
    shop_location?: true
    shop_Address1?: true
    shop_Address2?: true
    shop_District?: true
    shop_Taluk?: true
    shop_City?: true
    shop_Pincode?: true
    shop_Landmark?: true
    enteredBy?: true
    enteredDate?: true
    createdAt?: true
    updatedAt?: true
    photoProofData?: true
    idProofData?: true
    idProofBackData?: true
  }

  export type FormSubmissionMaxAggregateInputType = {
    id?: true
    legacyId?: true
    formType?: true
    skPassportNo?: true
    validationOtpGenerated?: true
    registeringDate?: true
    pi_firstName?: true
    pi_lastName?: true
    pi_profession?: true
    pi_dob?: true
    pi_phone?: true
    pi_whatsAppNumber?: true
    pi_emailId?: true
    pi_addressLane1?: true
    pi_addressLane2?: true
    pi_taluk?: true
    pi_district?: true
    pi_city?: true
    pi_state?: true
    pi_pincode?: true
    pi_landmark?: true
    pi_anniversaryDate?: true
    ref_nameOfTheperson?: true
    ref_place?: true
    sod_nameOfTheDealer?: true
    sod_place?: true
    photoProofPath?: true
    idProofPath?: true
    idProofBackPath?: true
    isContacted?: true
    isApproved?: true
    isDeleted?: true
    isActive?: true
    isPending?: true
    isRejected?: true
    shop_location?: true
    shop_Address1?: true
    shop_Address2?: true
    shop_District?: true
    shop_Taluk?: true
    shop_City?: true
    shop_Pincode?: true
    shop_Landmark?: true
    enteredBy?: true
    enteredDate?: true
    createdAt?: true
    updatedAt?: true
    photoProofData?: true
    idProofData?: true
    idProofBackData?: true
  }

  export type FormSubmissionCountAggregateInputType = {
    id?: true
    legacyId?: true
    formType?: true
    skPassportNo?: true
    validationOtpGenerated?: true
    registeringDate?: true
    pi_firstName?: true
    pi_lastName?: true
    pi_profession?: true
    pi_dob?: true
    pi_phone?: true
    pi_whatsAppNumber?: true
    pi_emailId?: true
    pi_addressLane1?: true
    pi_addressLane2?: true
    pi_taluk?: true
    pi_district?: true
    pi_city?: true
    pi_state?: true
    pi_pincode?: true
    pi_landmark?: true
    pi_anniversaryDate?: true
    ref_nameOfTheperson?: true
    ref_place?: true
    sod_nameOfTheDealer?: true
    sod_place?: true
    photoProofPath?: true
    idProofPath?: true
    idProofBackPath?: true
    isContacted?: true
    isApproved?: true
    isDeleted?: true
    isActive?: true
    isPending?: true
    isRejected?: true
    shop_location?: true
    shop_Address1?: true
    shop_Address2?: true
    shop_District?: true
    shop_Taluk?: true
    shop_City?: true
    shop_Pincode?: true
    shop_Landmark?: true
    enteredBy?: true
    enteredDate?: true
    createdAt?: true
    updatedAt?: true
    photoProofData?: true
    idProofData?: true
    idProofBackData?: true
    _all?: true
  }

  export type FormSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSubmission to aggregate.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormSubmissions
    **/
    _count?: true | FormSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormSubmissionMaxAggregateInputType
  }

  export type GetFormSubmissionAggregateType<T extends FormSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateFormSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormSubmission[P]>
      : GetScalarType<T[P], AggregateFormSubmission[P]>
  }




  export type FormSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormSubmissionWhereInput
    orderBy?: FormSubmissionOrderByWithAggregationInput | FormSubmissionOrderByWithAggregationInput[]
    by: FormSubmissionScalarFieldEnum[] | FormSubmissionScalarFieldEnum
    having?: FormSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormSubmissionCountAggregateInputType | true
    _avg?: FormSubmissionAvgAggregateInputType
    _sum?: FormSubmissionSumAggregateInputType
    _min?: FormSubmissionMinAggregateInputType
    _max?: FormSubmissionMaxAggregateInputType
  }

  export type FormSubmissionGroupByOutputType = {
    id: string
    legacyId: number | null
    formType: string
    skPassportNo: string | null
    validationOtpGenerated: string | null
    registeringDate: Date | null
    pi_firstName: string | null
    pi_lastName: string | null
    pi_profession: string | null
    pi_dob: string | null
    pi_phone: string | null
    pi_whatsAppNumber: string | null
    pi_emailId: string | null
    pi_addressLane1: string | null
    pi_addressLane2: string | null
    pi_taluk: string | null
    pi_district: string | null
    pi_city: string | null
    pi_state: string | null
    pi_pincode: string | null
    pi_landmark: string | null
    pi_anniversaryDate: string | null
    ref_nameOfTheperson: string | null
    ref_place: string | null
    sod_nameOfTheDealer: string | null
    sod_place: string | null
    photoProofPath: string | null
    idProofPath: string | null
    idProofBackPath: string | null
    isContacted: boolean | null
    isApproved: boolean | null
    isDeleted: boolean | null
    isActive: boolean | null
    isPending: boolean | null
    isRejected: boolean | null
    shop_location: string | null
    shop_Address1: string | null
    shop_Address2: string | null
    shop_District: string | null
    shop_Taluk: string | null
    shop_City: string | null
    shop_Pincode: string | null
    shop_Landmark: string | null
    enteredBy: string | null
    enteredDate: Date | null
    createdAt: Date
    updatedAt: Date
    photoProofData: string | null
    idProofData: string | null
    idProofBackData: string | null
    _count: FormSubmissionCountAggregateOutputType | null
    _avg: FormSubmissionAvgAggregateOutputType | null
    _sum: FormSubmissionSumAggregateOutputType | null
    _min: FormSubmissionMinAggregateOutputType | null
    _max: FormSubmissionMaxAggregateOutputType | null
  }

  type GetFormSubmissionGroupByPayload<T extends FormSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], FormSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type FormSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legacyId?: boolean
    formType?: boolean
    skPassportNo?: boolean
    validationOtpGenerated?: boolean
    registeringDate?: boolean
    pi_firstName?: boolean
    pi_lastName?: boolean
    pi_profession?: boolean
    pi_dob?: boolean
    pi_phone?: boolean
    pi_whatsAppNumber?: boolean
    pi_emailId?: boolean
    pi_addressLane1?: boolean
    pi_addressLane2?: boolean
    pi_taluk?: boolean
    pi_district?: boolean
    pi_city?: boolean
    pi_state?: boolean
    pi_pincode?: boolean
    pi_landmark?: boolean
    pi_anniversaryDate?: boolean
    ref_nameOfTheperson?: boolean
    ref_place?: boolean
    sod_nameOfTheDealer?: boolean
    sod_place?: boolean
    photoProofPath?: boolean
    idProofPath?: boolean
    idProofBackPath?: boolean
    isContacted?: boolean
    isApproved?: boolean
    isDeleted?: boolean
    isActive?: boolean
    isPending?: boolean
    isRejected?: boolean
    shop_location?: boolean
    shop_Address1?: boolean
    shop_Address2?: boolean
    shop_District?: boolean
    shop_Taluk?: boolean
    shop_City?: boolean
    shop_Pincode?: boolean
    shop_Landmark?: boolean
    enteredBy?: boolean
    enteredDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photoProofData?: boolean
    idProofData?: boolean
    idProofBackData?: boolean
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legacyId?: boolean
    formType?: boolean
    skPassportNo?: boolean
    validationOtpGenerated?: boolean
    registeringDate?: boolean
    pi_firstName?: boolean
    pi_lastName?: boolean
    pi_profession?: boolean
    pi_dob?: boolean
    pi_phone?: boolean
    pi_whatsAppNumber?: boolean
    pi_emailId?: boolean
    pi_addressLane1?: boolean
    pi_addressLane2?: boolean
    pi_taluk?: boolean
    pi_district?: boolean
    pi_city?: boolean
    pi_state?: boolean
    pi_pincode?: boolean
    pi_landmark?: boolean
    pi_anniversaryDate?: boolean
    ref_nameOfTheperson?: boolean
    ref_place?: boolean
    sod_nameOfTheDealer?: boolean
    sod_place?: boolean
    photoProofPath?: boolean
    idProofPath?: boolean
    idProofBackPath?: boolean
    isContacted?: boolean
    isApproved?: boolean
    isDeleted?: boolean
    isActive?: boolean
    isPending?: boolean
    isRejected?: boolean
    shop_location?: boolean
    shop_Address1?: boolean
    shop_Address2?: boolean
    shop_District?: boolean
    shop_Taluk?: boolean
    shop_City?: boolean
    shop_Pincode?: boolean
    shop_Landmark?: boolean
    enteredBy?: boolean
    enteredDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photoProofData?: boolean
    idProofData?: boolean
    idProofBackData?: boolean
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legacyId?: boolean
    formType?: boolean
    skPassportNo?: boolean
    validationOtpGenerated?: boolean
    registeringDate?: boolean
    pi_firstName?: boolean
    pi_lastName?: boolean
    pi_profession?: boolean
    pi_dob?: boolean
    pi_phone?: boolean
    pi_whatsAppNumber?: boolean
    pi_emailId?: boolean
    pi_addressLane1?: boolean
    pi_addressLane2?: boolean
    pi_taluk?: boolean
    pi_district?: boolean
    pi_city?: boolean
    pi_state?: boolean
    pi_pincode?: boolean
    pi_landmark?: boolean
    pi_anniversaryDate?: boolean
    ref_nameOfTheperson?: boolean
    ref_place?: boolean
    sod_nameOfTheDealer?: boolean
    sod_place?: boolean
    photoProofPath?: boolean
    idProofPath?: boolean
    idProofBackPath?: boolean
    isContacted?: boolean
    isApproved?: boolean
    isDeleted?: boolean
    isActive?: boolean
    isPending?: boolean
    isRejected?: boolean
    shop_location?: boolean
    shop_Address1?: boolean
    shop_Address2?: boolean
    shop_District?: boolean
    shop_Taluk?: boolean
    shop_City?: boolean
    shop_Pincode?: boolean
    shop_Landmark?: boolean
    enteredBy?: boolean
    enteredDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photoProofData?: boolean
    idProofData?: boolean
    idProofBackData?: boolean
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectScalar = {
    id?: boolean
    legacyId?: boolean
    formType?: boolean
    skPassportNo?: boolean
    validationOtpGenerated?: boolean
    registeringDate?: boolean
    pi_firstName?: boolean
    pi_lastName?: boolean
    pi_profession?: boolean
    pi_dob?: boolean
    pi_phone?: boolean
    pi_whatsAppNumber?: boolean
    pi_emailId?: boolean
    pi_addressLane1?: boolean
    pi_addressLane2?: boolean
    pi_taluk?: boolean
    pi_district?: boolean
    pi_city?: boolean
    pi_state?: boolean
    pi_pincode?: boolean
    pi_landmark?: boolean
    pi_anniversaryDate?: boolean
    ref_nameOfTheperson?: boolean
    ref_place?: boolean
    sod_nameOfTheDealer?: boolean
    sod_place?: boolean
    photoProofPath?: boolean
    idProofPath?: boolean
    idProofBackPath?: boolean
    isContacted?: boolean
    isApproved?: boolean
    isDeleted?: boolean
    isActive?: boolean
    isPending?: boolean
    isRejected?: boolean
    shop_location?: boolean
    shop_Address1?: boolean
    shop_Address2?: boolean
    shop_District?: boolean
    shop_Taluk?: boolean
    shop_City?: boolean
    shop_Pincode?: boolean
    shop_Landmark?: boolean
    enteredBy?: boolean
    enteredDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photoProofData?: boolean
    idProofData?: boolean
    idProofBackData?: boolean
  }

  export type FormSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "legacyId" | "formType" | "skPassportNo" | "validationOtpGenerated" | "registeringDate" | "pi_firstName" | "pi_lastName" | "pi_profession" | "pi_dob" | "pi_phone" | "pi_whatsAppNumber" | "pi_emailId" | "pi_addressLane1" | "pi_addressLane2" | "pi_taluk" | "pi_district" | "pi_city" | "pi_state" | "pi_pincode" | "pi_landmark" | "pi_anniversaryDate" | "ref_nameOfTheperson" | "ref_place" | "sod_nameOfTheDealer" | "sod_place" | "photoProofPath" | "idProofPath" | "idProofBackPath" | "isContacted" | "isApproved" | "isDeleted" | "isActive" | "isPending" | "isRejected" | "shop_location" | "shop_Address1" | "shop_Address2" | "shop_District" | "shop_Taluk" | "shop_City" | "shop_Pincode" | "shop_Landmark" | "enteredBy" | "enteredDate" | "createdAt" | "updatedAt" | "photoProofData" | "idProofData" | "idProofBackData", ExtArgs["result"]["formSubmission"]>

  export type $FormSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      legacyId: number | null
      formType: string
      skPassportNo: string | null
      validationOtpGenerated: string | null
      registeringDate: Date | null
      pi_firstName: string | null
      pi_lastName: string | null
      pi_profession: string | null
      pi_dob: string | null
      pi_phone: string | null
      pi_whatsAppNumber: string | null
      pi_emailId: string | null
      pi_addressLane1: string | null
      pi_addressLane2: string | null
      pi_taluk: string | null
      pi_district: string | null
      pi_city: string | null
      pi_state: string | null
      pi_pincode: string | null
      pi_landmark: string | null
      pi_anniversaryDate: string | null
      ref_nameOfTheperson: string | null
      ref_place: string | null
      sod_nameOfTheDealer: string | null
      sod_place: string | null
      photoProofPath: string | null
      idProofPath: string | null
      idProofBackPath: string | null
      isContacted: boolean | null
      isApproved: boolean | null
      isDeleted: boolean | null
      isActive: boolean | null
      isPending: boolean | null
      isRejected: boolean | null
      shop_location: string | null
      shop_Address1: string | null
      shop_Address2: string | null
      shop_District: string | null
      shop_Taluk: string | null
      shop_City: string | null
      shop_Pincode: string | null
      shop_Landmark: string | null
      enteredBy: string | null
      enteredDate: Date | null
      createdAt: Date
      updatedAt: Date
      photoProofData: string | null
      idProofData: string | null
      idProofBackData: string | null
    }, ExtArgs["result"]["formSubmission"]>
    composites: {}
  }

  type FormSubmissionGetPayload<S extends boolean | null | undefined | FormSubmissionDefaultArgs> = $Result.GetResult<Prisma.$FormSubmissionPayload, S>

  type FormSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormSubmissionCountAggregateInputType | true
    }

  export interface FormSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormSubmission'], meta: { name: 'FormSubmission' } }
    /**
     * Find zero or one FormSubmission that matches the filter.
     * @param {FormSubmissionFindUniqueArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormSubmissionFindUniqueArgs>(args: SelectSubset<T, FormSubmissionFindUniqueArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormSubmissionFindUniqueOrThrowArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, FormSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindFirstArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormSubmissionFindFirstArgs>(args?: SelectSubset<T, FormSubmissionFindFirstArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindFirstOrThrowArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, FormSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormSubmissions
     * const formSubmissions = await prisma.formSubmission.findMany()
     * 
     * // Get first 10 FormSubmissions
     * const formSubmissions = await prisma.formSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormSubmissionFindManyArgs>(args?: SelectSubset<T, FormSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormSubmission.
     * @param {FormSubmissionCreateArgs} args - Arguments to create a FormSubmission.
     * @example
     * // Create one FormSubmission
     * const FormSubmission = await prisma.formSubmission.create({
     *   data: {
     *     // ... data to create a FormSubmission
     *   }
     * })
     * 
     */
    create<T extends FormSubmissionCreateArgs>(args: SelectSubset<T, FormSubmissionCreateArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormSubmissions.
     * @param {FormSubmissionCreateManyArgs} args - Arguments to create many FormSubmissions.
     * @example
     * // Create many FormSubmissions
     * const formSubmission = await prisma.formSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormSubmissionCreateManyArgs>(args?: SelectSubset<T, FormSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormSubmissions and returns the data saved in the database.
     * @param {FormSubmissionCreateManyAndReturnArgs} args - Arguments to create many FormSubmissions.
     * @example
     * // Create many FormSubmissions
     * const formSubmission = await prisma.formSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormSubmissions and only return the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, FormSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormSubmission.
     * @param {FormSubmissionDeleteArgs} args - Arguments to delete one FormSubmission.
     * @example
     * // Delete one FormSubmission
     * const FormSubmission = await prisma.formSubmission.delete({
     *   where: {
     *     // ... filter to delete one FormSubmission
     *   }
     * })
     * 
     */
    delete<T extends FormSubmissionDeleteArgs>(args: SelectSubset<T, FormSubmissionDeleteArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormSubmission.
     * @param {FormSubmissionUpdateArgs} args - Arguments to update one FormSubmission.
     * @example
     * // Update one FormSubmission
     * const formSubmission = await prisma.formSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormSubmissionUpdateArgs>(args: SelectSubset<T, FormSubmissionUpdateArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormSubmissions.
     * @param {FormSubmissionDeleteManyArgs} args - Arguments to filter FormSubmissions to delete.
     * @example
     * // Delete a few FormSubmissions
     * const { count } = await prisma.formSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormSubmissionDeleteManyArgs>(args?: SelectSubset<T, FormSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormSubmissions
     * const formSubmission = await prisma.formSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormSubmissionUpdateManyArgs>(args: SelectSubset<T, FormSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSubmissions and returns the data updated in the database.
     * @param {FormSubmissionUpdateManyAndReturnArgs} args - Arguments to update many FormSubmissions.
     * @example
     * // Update many FormSubmissions
     * const formSubmission = await prisma.formSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormSubmissions and only return the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, FormSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormSubmission.
     * @param {FormSubmissionUpsertArgs} args - Arguments to update or create a FormSubmission.
     * @example
     * // Update or create a FormSubmission
     * const formSubmission = await prisma.formSubmission.upsert({
     *   create: {
     *     // ... data to create a FormSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormSubmission we want to update
     *   }
     * })
     */
    upsert<T extends FormSubmissionUpsertArgs>(args: SelectSubset<T, FormSubmissionUpsertArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionCountArgs} args - Arguments to filter FormSubmissions to count.
     * @example
     * // Count the number of FormSubmissions
     * const count = await prisma.formSubmission.count({
     *   where: {
     *     // ... the filter for the FormSubmissions we want to count
     *   }
     * })
    **/
    count<T extends FormSubmissionCountArgs>(
      args?: Subset<T, FormSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormSubmissionAggregateArgs>(args: Subset<T, FormSubmissionAggregateArgs>): Prisma.PrismaPromise<GetFormSubmissionAggregateType<T>>

    /**
     * Group by FormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: FormSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormSubmission model
   */
  readonly fields: FormSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormSubmission model
   */
  interface FormSubmissionFieldRefs {
    readonly id: FieldRef<"FormSubmission", 'String'>
    readonly legacyId: FieldRef<"FormSubmission", 'Int'>
    readonly formType: FieldRef<"FormSubmission", 'String'>
    readonly skPassportNo: FieldRef<"FormSubmission", 'String'>
    readonly validationOtpGenerated: FieldRef<"FormSubmission", 'String'>
    readonly registeringDate: FieldRef<"FormSubmission", 'DateTime'>
    readonly pi_firstName: FieldRef<"FormSubmission", 'String'>
    readonly pi_lastName: FieldRef<"FormSubmission", 'String'>
    readonly pi_profession: FieldRef<"FormSubmission", 'String'>
    readonly pi_dob: FieldRef<"FormSubmission", 'String'>
    readonly pi_phone: FieldRef<"FormSubmission", 'String'>
    readonly pi_whatsAppNumber: FieldRef<"FormSubmission", 'String'>
    readonly pi_emailId: FieldRef<"FormSubmission", 'String'>
    readonly pi_addressLane1: FieldRef<"FormSubmission", 'String'>
    readonly pi_addressLane2: FieldRef<"FormSubmission", 'String'>
    readonly pi_taluk: FieldRef<"FormSubmission", 'String'>
    readonly pi_district: FieldRef<"FormSubmission", 'String'>
    readonly pi_city: FieldRef<"FormSubmission", 'String'>
    readonly pi_state: FieldRef<"FormSubmission", 'String'>
    readonly pi_pincode: FieldRef<"FormSubmission", 'String'>
    readonly pi_landmark: FieldRef<"FormSubmission", 'String'>
    readonly pi_anniversaryDate: FieldRef<"FormSubmission", 'String'>
    readonly ref_nameOfTheperson: FieldRef<"FormSubmission", 'String'>
    readonly ref_place: FieldRef<"FormSubmission", 'String'>
    readonly sod_nameOfTheDealer: FieldRef<"FormSubmission", 'String'>
    readonly sod_place: FieldRef<"FormSubmission", 'String'>
    readonly photoProofPath: FieldRef<"FormSubmission", 'String'>
    readonly idProofPath: FieldRef<"FormSubmission", 'String'>
    readonly idProofBackPath: FieldRef<"FormSubmission", 'String'>
    readonly isContacted: FieldRef<"FormSubmission", 'Boolean'>
    readonly isApproved: FieldRef<"FormSubmission", 'Boolean'>
    readonly isDeleted: FieldRef<"FormSubmission", 'Boolean'>
    readonly isActive: FieldRef<"FormSubmission", 'Boolean'>
    readonly isPending: FieldRef<"FormSubmission", 'Boolean'>
    readonly isRejected: FieldRef<"FormSubmission", 'Boolean'>
    readonly shop_location: FieldRef<"FormSubmission", 'String'>
    readonly shop_Address1: FieldRef<"FormSubmission", 'String'>
    readonly shop_Address2: FieldRef<"FormSubmission", 'String'>
    readonly shop_District: FieldRef<"FormSubmission", 'String'>
    readonly shop_Taluk: FieldRef<"FormSubmission", 'String'>
    readonly shop_City: FieldRef<"FormSubmission", 'String'>
    readonly shop_Pincode: FieldRef<"FormSubmission", 'String'>
    readonly shop_Landmark: FieldRef<"FormSubmission", 'String'>
    readonly enteredBy: FieldRef<"FormSubmission", 'String'>
    readonly enteredDate: FieldRef<"FormSubmission", 'DateTime'>
    readonly createdAt: FieldRef<"FormSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"FormSubmission", 'DateTime'>
    readonly photoProofData: FieldRef<"FormSubmission", 'String'>
    readonly idProofData: FieldRef<"FormSubmission", 'String'>
    readonly idProofBackData: FieldRef<"FormSubmission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FormSubmission findUnique
   */
  export type FormSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission findUniqueOrThrow
   */
  export type FormSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission findFirst
   */
  export type FormSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissions.
     */
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission findFirstOrThrow
   */
  export type FormSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissions.
     */
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission findMany
   */
  export type FormSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmissions to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissions.
     */
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission create
   */
  export type FormSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a FormSubmission.
     */
    data: XOR<FormSubmissionCreateInput, FormSubmissionUncheckedCreateInput>
  }

  /**
   * FormSubmission createMany
   */
  export type FormSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormSubmissions.
     */
    data: FormSubmissionCreateManyInput | FormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormSubmission createManyAndReturn
   */
  export type FormSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many FormSubmissions.
     */
    data: FormSubmissionCreateManyInput | FormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormSubmission update
   */
  export type FormSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a FormSubmission.
     */
    data: XOR<FormSubmissionUpdateInput, FormSubmissionUncheckedUpdateInput>
    /**
     * Choose, which FormSubmission to update.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission updateMany
   */
  export type FormSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormSubmissions.
     */
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FormSubmissions to update
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to update.
     */
    limit?: number
  }

  /**
   * FormSubmission updateManyAndReturn
   */
  export type FormSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update FormSubmissions.
     */
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FormSubmissions to update
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to update.
     */
    limit?: number
  }

  /**
   * FormSubmission upsert
   */
  export type FormSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the FormSubmission to update in case it exists.
     */
    where: FormSubmissionWhereUniqueInput
    /**
     * In case the FormSubmission found by the `where` argument doesn't exist, create a new FormSubmission with this data.
     */
    create: XOR<FormSubmissionCreateInput, FormSubmissionUncheckedCreateInput>
    /**
     * In case the FormSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormSubmissionUpdateInput, FormSubmissionUncheckedUpdateInput>
  }

  /**
   * FormSubmission delete
   */
  export type FormSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter which FormSubmission to delete.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission deleteMany
   */
  export type FormSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSubmissions to delete
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to delete.
     */
    limit?: number
  }

  /**
   * FormSubmission without action
   */
  export type FormSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const FormSubmissionScalarFieldEnum: {
    id: 'id',
    legacyId: 'legacyId',
    formType: 'formType',
    skPassportNo: 'skPassportNo',
    validationOtpGenerated: 'validationOtpGenerated',
    registeringDate: 'registeringDate',
    pi_firstName: 'pi_firstName',
    pi_lastName: 'pi_lastName',
    pi_profession: 'pi_profession',
    pi_dob: 'pi_dob',
    pi_phone: 'pi_phone',
    pi_whatsAppNumber: 'pi_whatsAppNumber',
    pi_emailId: 'pi_emailId',
    pi_addressLane1: 'pi_addressLane1',
    pi_addressLane2: 'pi_addressLane2',
    pi_taluk: 'pi_taluk',
    pi_district: 'pi_district',
    pi_city: 'pi_city',
    pi_state: 'pi_state',
    pi_pincode: 'pi_pincode',
    pi_landmark: 'pi_landmark',
    pi_anniversaryDate: 'pi_anniversaryDate',
    ref_nameOfTheperson: 'ref_nameOfTheperson',
    ref_place: 'ref_place',
    sod_nameOfTheDealer: 'sod_nameOfTheDealer',
    sod_place: 'sod_place',
    photoProofPath: 'photoProofPath',
    idProofPath: 'idProofPath',
    idProofBackPath: 'idProofBackPath',
    isContacted: 'isContacted',
    isApproved: 'isApproved',
    isDeleted: 'isDeleted',
    isActive: 'isActive',
    isPending: 'isPending',
    isRejected: 'isRejected',
    shop_location: 'shop_location',
    shop_Address1: 'shop_Address1',
    shop_Address2: 'shop_Address2',
    shop_District: 'shop_District',
    shop_Taluk: 'shop_Taluk',
    shop_City: 'shop_City',
    shop_Pincode: 'shop_Pincode',
    shop_Landmark: 'shop_Landmark',
    enteredBy: 'enteredBy',
    enteredDate: 'enteredDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    photoProofData: 'photoProofData',
    idProofData: 'idProofData',
    idProofBackData: 'idProofBackData'
  };

  export type FormSubmissionScalarFieldEnum = (typeof FormSubmissionScalarFieldEnum)[keyof typeof FormSubmissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    password?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type FormSubmissionWhereInput = {
    AND?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    OR?: FormSubmissionWhereInput[]
    NOT?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    id?: StringFilter<"FormSubmission"> | string
    legacyId?: IntNullableFilter<"FormSubmission"> | number | null
    formType?: StringFilter<"FormSubmission"> | string
    skPassportNo?: StringNullableFilter<"FormSubmission"> | string | null
    validationOtpGenerated?: StringNullableFilter<"FormSubmission"> | string | null
    registeringDate?: DateTimeNullableFilter<"FormSubmission"> | Date | string | null
    pi_firstName?: StringNullableFilter<"FormSubmission"> | string | null
    pi_lastName?: StringNullableFilter<"FormSubmission"> | string | null
    pi_profession?: StringNullableFilter<"FormSubmission"> | string | null
    pi_dob?: StringNullableFilter<"FormSubmission"> | string | null
    pi_phone?: StringNullableFilter<"FormSubmission"> | string | null
    pi_whatsAppNumber?: StringNullableFilter<"FormSubmission"> | string | null
    pi_emailId?: StringNullableFilter<"FormSubmission"> | string | null
    pi_addressLane1?: StringNullableFilter<"FormSubmission"> | string | null
    pi_addressLane2?: StringNullableFilter<"FormSubmission"> | string | null
    pi_taluk?: StringNullableFilter<"FormSubmission"> | string | null
    pi_district?: StringNullableFilter<"FormSubmission"> | string | null
    pi_city?: StringNullableFilter<"FormSubmission"> | string | null
    pi_state?: StringNullableFilter<"FormSubmission"> | string | null
    pi_pincode?: StringNullableFilter<"FormSubmission"> | string | null
    pi_landmark?: StringNullableFilter<"FormSubmission"> | string | null
    pi_anniversaryDate?: StringNullableFilter<"FormSubmission"> | string | null
    ref_nameOfTheperson?: StringNullableFilter<"FormSubmission"> | string | null
    ref_place?: StringNullableFilter<"FormSubmission"> | string | null
    sod_nameOfTheDealer?: StringNullableFilter<"FormSubmission"> | string | null
    sod_place?: StringNullableFilter<"FormSubmission"> | string | null
    photoProofPath?: StringNullableFilter<"FormSubmission"> | string | null
    idProofPath?: StringNullableFilter<"FormSubmission"> | string | null
    idProofBackPath?: StringNullableFilter<"FormSubmission"> | string | null
    isContacted?: BoolNullableFilter<"FormSubmission"> | boolean | null
    isApproved?: BoolNullableFilter<"FormSubmission"> | boolean | null
    isDeleted?: BoolNullableFilter<"FormSubmission"> | boolean | null
    isActive?: BoolNullableFilter<"FormSubmission"> | boolean | null
    isPending?: BoolNullableFilter<"FormSubmission"> | boolean | null
    isRejected?: BoolNullableFilter<"FormSubmission"> | boolean | null
    shop_location?: StringNullableFilter<"FormSubmission"> | string | null
    shop_Address1?: StringNullableFilter<"FormSubmission"> | string | null
    shop_Address2?: StringNullableFilter<"FormSubmission"> | string | null
    shop_District?: StringNullableFilter<"FormSubmission"> | string | null
    shop_Taluk?: StringNullableFilter<"FormSubmission"> | string | null
    shop_City?: StringNullableFilter<"FormSubmission"> | string | null
    shop_Pincode?: StringNullableFilter<"FormSubmission"> | string | null
    shop_Landmark?: StringNullableFilter<"FormSubmission"> | string | null
    enteredBy?: StringNullableFilter<"FormSubmission"> | string | null
    enteredDate?: DateTimeNullableFilter<"FormSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"FormSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"FormSubmission"> | Date | string
    photoProofData?: StringNullableFilter<"FormSubmission"> | string | null
    idProofData?: StringNullableFilter<"FormSubmission"> | string | null
    idProofBackData?: StringNullableFilter<"FormSubmission"> | string | null
  }

  export type FormSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    legacyId?: SortOrderInput | SortOrder
    formType?: SortOrder
    skPassportNo?: SortOrderInput | SortOrder
    validationOtpGenerated?: SortOrderInput | SortOrder
    registeringDate?: SortOrderInput | SortOrder
    pi_firstName?: SortOrderInput | SortOrder
    pi_lastName?: SortOrderInput | SortOrder
    pi_profession?: SortOrderInput | SortOrder
    pi_dob?: SortOrderInput | SortOrder
    pi_phone?: SortOrderInput | SortOrder
    pi_whatsAppNumber?: SortOrderInput | SortOrder
    pi_emailId?: SortOrderInput | SortOrder
    pi_addressLane1?: SortOrderInput | SortOrder
    pi_addressLane2?: SortOrderInput | SortOrder
    pi_taluk?: SortOrderInput | SortOrder
    pi_district?: SortOrderInput | SortOrder
    pi_city?: SortOrderInput | SortOrder
    pi_state?: SortOrderInput | SortOrder
    pi_pincode?: SortOrderInput | SortOrder
    pi_landmark?: SortOrderInput | SortOrder
    pi_anniversaryDate?: SortOrderInput | SortOrder
    ref_nameOfTheperson?: SortOrderInput | SortOrder
    ref_place?: SortOrderInput | SortOrder
    sod_nameOfTheDealer?: SortOrderInput | SortOrder
    sod_place?: SortOrderInput | SortOrder
    photoProofPath?: SortOrderInput | SortOrder
    idProofPath?: SortOrderInput | SortOrder
    idProofBackPath?: SortOrderInput | SortOrder
    isContacted?: SortOrderInput | SortOrder
    isApproved?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    isPending?: SortOrderInput | SortOrder
    isRejected?: SortOrderInput | SortOrder
    shop_location?: SortOrderInput | SortOrder
    shop_Address1?: SortOrderInput | SortOrder
    shop_Address2?: SortOrderInput | SortOrder
    shop_District?: SortOrderInput | SortOrder
    shop_Taluk?: SortOrderInput | SortOrder
    shop_City?: SortOrderInput | SortOrder
    shop_Pincode?: SortOrderInput | SortOrder
    shop_Landmark?: SortOrderInput | SortOrder
    enteredBy?: SortOrderInput | SortOrder
    enteredDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photoProofData?: SortOrderInput | SortOrder
    idProofData?: SortOrderInput | SortOrder
    idProofBackData?: SortOrderInput | SortOrder
  }

  export type FormSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    legacyId?: number
    skPassportNo?: string
    AND?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    OR?: FormSubmissionWhereInput[]
    NOT?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    formType?: StringFilter<"FormSubmission"> | string
    validationOtpGenerated?: StringNullableFilter<"FormSubmission"> | string | null
    registeringDate?: DateTimeNullableFilter<"FormSubmission"> | Date | string | null
    pi_firstName?: StringNullableFilter<"FormSubmission"> | string | null
    pi_lastName?: StringNullableFilter<"FormSubmission"> | string | null
    pi_profession?: StringNullableFilter<"FormSubmission"> | string | null
    pi_dob?: StringNullableFilter<"FormSubmission"> | string | null
    pi_phone?: StringNullableFilter<"FormSubmission"> | string | null
    pi_whatsAppNumber?: StringNullableFilter<"FormSubmission"> | string | null
    pi_emailId?: StringNullableFilter<"FormSubmission"> | string | null
    pi_addressLane1?: StringNullableFilter<"FormSubmission"> | string | null
    pi_addressLane2?: StringNullableFilter<"FormSubmission"> | string | null
    pi_taluk?: StringNullableFilter<"FormSubmission"> | string | null
    pi_district?: StringNullableFilter<"FormSubmission"> | string | null
    pi_city?: StringNullableFilter<"FormSubmission"> | string | null
    pi_state?: StringNullableFilter<"FormSubmission"> | string | null
    pi_pincode?: StringNullableFilter<"FormSubmission"> | string | null
    pi_landmark?: StringNullableFilter<"FormSubmission"> | string | null
    pi_anniversaryDate?: StringNullableFilter<"FormSubmission"> | string | null
    ref_nameOfTheperson?: StringNullableFilter<"FormSubmission"> | string | null
    ref_place?: StringNullableFilter<"FormSubmission"> | string | null
    sod_nameOfTheDealer?: StringNullableFilter<"FormSubmission"> | string | null
    sod_place?: StringNullableFilter<"FormSubmission"> | string | null
    photoProofPath?: StringNullableFilter<"FormSubmission"> | string | null
    idProofPath?: StringNullableFilter<"FormSubmission"> | string | null
    idProofBackPath?: StringNullableFilter<"FormSubmission"> | string | null
    isContacted?: BoolNullableFilter<"FormSubmission"> | boolean | null
    isApproved?: BoolNullableFilter<"FormSubmission"> | boolean | null
    isDeleted?: BoolNullableFilter<"FormSubmission"> | boolean | null
    isActive?: BoolNullableFilter<"FormSubmission"> | boolean | null
    isPending?: BoolNullableFilter<"FormSubmission"> | boolean | null
    isRejected?: BoolNullableFilter<"FormSubmission"> | boolean | null
    shop_location?: StringNullableFilter<"FormSubmission"> | string | null
    shop_Address1?: StringNullableFilter<"FormSubmission"> | string | null
    shop_Address2?: StringNullableFilter<"FormSubmission"> | string | null
    shop_District?: StringNullableFilter<"FormSubmission"> | string | null
    shop_Taluk?: StringNullableFilter<"FormSubmission"> | string | null
    shop_City?: StringNullableFilter<"FormSubmission"> | string | null
    shop_Pincode?: StringNullableFilter<"FormSubmission"> | string | null
    shop_Landmark?: StringNullableFilter<"FormSubmission"> | string | null
    enteredBy?: StringNullableFilter<"FormSubmission"> | string | null
    enteredDate?: DateTimeNullableFilter<"FormSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"FormSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"FormSubmission"> | Date | string
    photoProofData?: StringNullableFilter<"FormSubmission"> | string | null
    idProofData?: StringNullableFilter<"FormSubmission"> | string | null
    idProofBackData?: StringNullableFilter<"FormSubmission"> | string | null
  }, "id" | "legacyId" | "skPassportNo">

  export type FormSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    legacyId?: SortOrderInput | SortOrder
    formType?: SortOrder
    skPassportNo?: SortOrderInput | SortOrder
    validationOtpGenerated?: SortOrderInput | SortOrder
    registeringDate?: SortOrderInput | SortOrder
    pi_firstName?: SortOrderInput | SortOrder
    pi_lastName?: SortOrderInput | SortOrder
    pi_profession?: SortOrderInput | SortOrder
    pi_dob?: SortOrderInput | SortOrder
    pi_phone?: SortOrderInput | SortOrder
    pi_whatsAppNumber?: SortOrderInput | SortOrder
    pi_emailId?: SortOrderInput | SortOrder
    pi_addressLane1?: SortOrderInput | SortOrder
    pi_addressLane2?: SortOrderInput | SortOrder
    pi_taluk?: SortOrderInput | SortOrder
    pi_district?: SortOrderInput | SortOrder
    pi_city?: SortOrderInput | SortOrder
    pi_state?: SortOrderInput | SortOrder
    pi_pincode?: SortOrderInput | SortOrder
    pi_landmark?: SortOrderInput | SortOrder
    pi_anniversaryDate?: SortOrderInput | SortOrder
    ref_nameOfTheperson?: SortOrderInput | SortOrder
    ref_place?: SortOrderInput | SortOrder
    sod_nameOfTheDealer?: SortOrderInput | SortOrder
    sod_place?: SortOrderInput | SortOrder
    photoProofPath?: SortOrderInput | SortOrder
    idProofPath?: SortOrderInput | SortOrder
    idProofBackPath?: SortOrderInput | SortOrder
    isContacted?: SortOrderInput | SortOrder
    isApproved?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    isPending?: SortOrderInput | SortOrder
    isRejected?: SortOrderInput | SortOrder
    shop_location?: SortOrderInput | SortOrder
    shop_Address1?: SortOrderInput | SortOrder
    shop_Address2?: SortOrderInput | SortOrder
    shop_District?: SortOrderInput | SortOrder
    shop_Taluk?: SortOrderInput | SortOrder
    shop_City?: SortOrderInput | SortOrder
    shop_Pincode?: SortOrderInput | SortOrder
    shop_Landmark?: SortOrderInput | SortOrder
    enteredBy?: SortOrderInput | SortOrder
    enteredDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photoProofData?: SortOrderInput | SortOrder
    idProofData?: SortOrderInput | SortOrder
    idProofBackData?: SortOrderInput | SortOrder
    _count?: FormSubmissionCountOrderByAggregateInput
    _avg?: FormSubmissionAvgOrderByAggregateInput
    _max?: FormSubmissionMaxOrderByAggregateInput
    _min?: FormSubmissionMinOrderByAggregateInput
    _sum?: FormSubmissionSumOrderByAggregateInput
  }

  export type FormSubmissionScalarWhereWithAggregatesInput = {
    AND?: FormSubmissionScalarWhereWithAggregatesInput | FormSubmissionScalarWhereWithAggregatesInput[]
    OR?: FormSubmissionScalarWhereWithAggregatesInput[]
    NOT?: FormSubmissionScalarWhereWithAggregatesInput | FormSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormSubmission"> | string
    legacyId?: IntNullableWithAggregatesFilter<"FormSubmission"> | number | null
    formType?: StringWithAggregatesFilter<"FormSubmission"> | string
    skPassportNo?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    validationOtpGenerated?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    registeringDate?: DateTimeNullableWithAggregatesFilter<"FormSubmission"> | Date | string | null
    pi_firstName?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_lastName?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_profession?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_dob?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_phone?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_whatsAppNumber?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_emailId?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_addressLane1?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_addressLane2?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_taluk?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_district?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_city?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_state?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_pincode?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_landmark?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    pi_anniversaryDate?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    ref_nameOfTheperson?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    ref_place?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    sod_nameOfTheDealer?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    sod_place?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    photoProofPath?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    idProofPath?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    idProofBackPath?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    isContacted?: BoolNullableWithAggregatesFilter<"FormSubmission"> | boolean | null
    isApproved?: BoolNullableWithAggregatesFilter<"FormSubmission"> | boolean | null
    isDeleted?: BoolNullableWithAggregatesFilter<"FormSubmission"> | boolean | null
    isActive?: BoolNullableWithAggregatesFilter<"FormSubmission"> | boolean | null
    isPending?: BoolNullableWithAggregatesFilter<"FormSubmission"> | boolean | null
    isRejected?: BoolNullableWithAggregatesFilter<"FormSubmission"> | boolean | null
    shop_location?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    shop_Address1?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    shop_Address2?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    shop_District?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    shop_Taluk?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    shop_City?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    shop_Pincode?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    shop_Landmark?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    enteredBy?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    enteredDate?: DateTimeNullableWithAggregatesFilter<"FormSubmission"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FormSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormSubmission"> | Date | string
    photoProofData?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    idProofData?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    idProofBackData?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
  }

  export type AdminUserCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionCreateInput = {
    id?: string
    legacyId?: number | null
    formType: string
    skPassportNo?: string | null
    validationOtpGenerated?: string | null
    registeringDate?: Date | string | null
    pi_firstName?: string | null
    pi_lastName?: string | null
    pi_profession?: string | null
    pi_dob?: string | null
    pi_phone?: string | null
    pi_whatsAppNumber?: string | null
    pi_emailId?: string | null
    pi_addressLane1?: string | null
    pi_addressLane2?: string | null
    pi_taluk?: string | null
    pi_district?: string | null
    pi_city?: string | null
    pi_state?: string | null
    pi_pincode?: string | null
    pi_landmark?: string | null
    pi_anniversaryDate?: string | null
    ref_nameOfTheperson?: string | null
    ref_place?: string | null
    sod_nameOfTheDealer?: string | null
    sod_place?: string | null
    photoProofPath?: string | null
    idProofPath?: string | null
    idProofBackPath?: string | null
    isContacted?: boolean | null
    isApproved?: boolean | null
    isDeleted?: boolean | null
    isActive?: boolean | null
    isPending?: boolean | null
    isRejected?: boolean | null
    shop_location?: string | null
    shop_Address1?: string | null
    shop_Address2?: string | null
    shop_District?: string | null
    shop_Taluk?: string | null
    shop_City?: string | null
    shop_Pincode?: string | null
    shop_Landmark?: string | null
    enteredBy?: string | null
    enteredDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photoProofData?: string | null
    idProofData?: string | null
    idProofBackData?: string | null
  }

  export type FormSubmissionUncheckedCreateInput = {
    id?: string
    legacyId?: number | null
    formType: string
    skPassportNo?: string | null
    validationOtpGenerated?: string | null
    registeringDate?: Date | string | null
    pi_firstName?: string | null
    pi_lastName?: string | null
    pi_profession?: string | null
    pi_dob?: string | null
    pi_phone?: string | null
    pi_whatsAppNumber?: string | null
    pi_emailId?: string | null
    pi_addressLane1?: string | null
    pi_addressLane2?: string | null
    pi_taluk?: string | null
    pi_district?: string | null
    pi_city?: string | null
    pi_state?: string | null
    pi_pincode?: string | null
    pi_landmark?: string | null
    pi_anniversaryDate?: string | null
    ref_nameOfTheperson?: string | null
    ref_place?: string | null
    sod_nameOfTheDealer?: string | null
    sod_place?: string | null
    photoProofPath?: string | null
    idProofPath?: string | null
    idProofBackPath?: string | null
    isContacted?: boolean | null
    isApproved?: boolean | null
    isDeleted?: boolean | null
    isActive?: boolean | null
    isPending?: boolean | null
    isRejected?: boolean | null
    shop_location?: string | null
    shop_Address1?: string | null
    shop_Address2?: string | null
    shop_District?: string | null
    shop_Taluk?: string | null
    shop_City?: string | null
    shop_Pincode?: string | null
    shop_Landmark?: string | null
    enteredBy?: string | null
    enteredDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photoProofData?: string | null
    idProofData?: string | null
    idProofBackData?: string | null
  }

  export type FormSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    formType?: StringFieldUpdateOperationsInput | string
    skPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    validationOtpGenerated?: NullableStringFieldUpdateOperationsInput | string | null
    registeringDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pi_firstName?: NullableStringFieldUpdateOperationsInput | string | null
    pi_lastName?: NullableStringFieldUpdateOperationsInput | string | null
    pi_profession?: NullableStringFieldUpdateOperationsInput | string | null
    pi_dob?: NullableStringFieldUpdateOperationsInput | string | null
    pi_phone?: NullableStringFieldUpdateOperationsInput | string | null
    pi_whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    pi_emailId?: NullableStringFieldUpdateOperationsInput | string | null
    pi_addressLane1?: NullableStringFieldUpdateOperationsInput | string | null
    pi_addressLane2?: NullableStringFieldUpdateOperationsInput | string | null
    pi_taluk?: NullableStringFieldUpdateOperationsInput | string | null
    pi_district?: NullableStringFieldUpdateOperationsInput | string | null
    pi_city?: NullableStringFieldUpdateOperationsInput | string | null
    pi_state?: NullableStringFieldUpdateOperationsInput | string | null
    pi_pincode?: NullableStringFieldUpdateOperationsInput | string | null
    pi_landmark?: NullableStringFieldUpdateOperationsInput | string | null
    pi_anniversaryDate?: NullableStringFieldUpdateOperationsInput | string | null
    ref_nameOfTheperson?: NullableStringFieldUpdateOperationsInput | string | null
    ref_place?: NullableStringFieldUpdateOperationsInput | string | null
    sod_nameOfTheDealer?: NullableStringFieldUpdateOperationsInput | string | null
    sod_place?: NullableStringFieldUpdateOperationsInput | string | null
    photoProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    idProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackPath?: NullableStringFieldUpdateOperationsInput | string | null
    isContacted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPending?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRejected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shop_location?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Address1?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Address2?: NullableStringFieldUpdateOperationsInput | string | null
    shop_District?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Taluk?: NullableStringFieldUpdateOperationsInput | string | null
    shop_City?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Pincode?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Landmark?: NullableStringFieldUpdateOperationsInput | string | null
    enteredBy?: NullableStringFieldUpdateOperationsInput | string | null
    enteredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    formType?: StringFieldUpdateOperationsInput | string
    skPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    validationOtpGenerated?: NullableStringFieldUpdateOperationsInput | string | null
    registeringDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pi_firstName?: NullableStringFieldUpdateOperationsInput | string | null
    pi_lastName?: NullableStringFieldUpdateOperationsInput | string | null
    pi_profession?: NullableStringFieldUpdateOperationsInput | string | null
    pi_dob?: NullableStringFieldUpdateOperationsInput | string | null
    pi_phone?: NullableStringFieldUpdateOperationsInput | string | null
    pi_whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    pi_emailId?: NullableStringFieldUpdateOperationsInput | string | null
    pi_addressLane1?: NullableStringFieldUpdateOperationsInput | string | null
    pi_addressLane2?: NullableStringFieldUpdateOperationsInput | string | null
    pi_taluk?: NullableStringFieldUpdateOperationsInput | string | null
    pi_district?: NullableStringFieldUpdateOperationsInput | string | null
    pi_city?: NullableStringFieldUpdateOperationsInput | string | null
    pi_state?: NullableStringFieldUpdateOperationsInput | string | null
    pi_pincode?: NullableStringFieldUpdateOperationsInput | string | null
    pi_landmark?: NullableStringFieldUpdateOperationsInput | string | null
    pi_anniversaryDate?: NullableStringFieldUpdateOperationsInput | string | null
    ref_nameOfTheperson?: NullableStringFieldUpdateOperationsInput | string | null
    ref_place?: NullableStringFieldUpdateOperationsInput | string | null
    sod_nameOfTheDealer?: NullableStringFieldUpdateOperationsInput | string | null
    sod_place?: NullableStringFieldUpdateOperationsInput | string | null
    photoProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    idProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackPath?: NullableStringFieldUpdateOperationsInput | string | null
    isContacted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPending?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRejected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shop_location?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Address1?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Address2?: NullableStringFieldUpdateOperationsInput | string | null
    shop_District?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Taluk?: NullableStringFieldUpdateOperationsInput | string | null
    shop_City?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Pincode?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Landmark?: NullableStringFieldUpdateOperationsInput | string | null
    enteredBy?: NullableStringFieldUpdateOperationsInput | string | null
    enteredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormSubmissionCreateManyInput = {
    id?: string
    legacyId?: number | null
    formType: string
    skPassportNo?: string | null
    validationOtpGenerated?: string | null
    registeringDate?: Date | string | null
    pi_firstName?: string | null
    pi_lastName?: string | null
    pi_profession?: string | null
    pi_dob?: string | null
    pi_phone?: string | null
    pi_whatsAppNumber?: string | null
    pi_emailId?: string | null
    pi_addressLane1?: string | null
    pi_addressLane2?: string | null
    pi_taluk?: string | null
    pi_district?: string | null
    pi_city?: string | null
    pi_state?: string | null
    pi_pincode?: string | null
    pi_landmark?: string | null
    pi_anniversaryDate?: string | null
    ref_nameOfTheperson?: string | null
    ref_place?: string | null
    sod_nameOfTheDealer?: string | null
    sod_place?: string | null
    photoProofPath?: string | null
    idProofPath?: string | null
    idProofBackPath?: string | null
    isContacted?: boolean | null
    isApproved?: boolean | null
    isDeleted?: boolean | null
    isActive?: boolean | null
    isPending?: boolean | null
    isRejected?: boolean | null
    shop_location?: string | null
    shop_Address1?: string | null
    shop_Address2?: string | null
    shop_District?: string | null
    shop_Taluk?: string | null
    shop_City?: string | null
    shop_Pincode?: string | null
    shop_Landmark?: string | null
    enteredBy?: string | null
    enteredDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photoProofData?: string | null
    idProofData?: string | null
    idProofBackData?: string | null
  }

  export type FormSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    formType?: StringFieldUpdateOperationsInput | string
    skPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    validationOtpGenerated?: NullableStringFieldUpdateOperationsInput | string | null
    registeringDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pi_firstName?: NullableStringFieldUpdateOperationsInput | string | null
    pi_lastName?: NullableStringFieldUpdateOperationsInput | string | null
    pi_profession?: NullableStringFieldUpdateOperationsInput | string | null
    pi_dob?: NullableStringFieldUpdateOperationsInput | string | null
    pi_phone?: NullableStringFieldUpdateOperationsInput | string | null
    pi_whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    pi_emailId?: NullableStringFieldUpdateOperationsInput | string | null
    pi_addressLane1?: NullableStringFieldUpdateOperationsInput | string | null
    pi_addressLane2?: NullableStringFieldUpdateOperationsInput | string | null
    pi_taluk?: NullableStringFieldUpdateOperationsInput | string | null
    pi_district?: NullableStringFieldUpdateOperationsInput | string | null
    pi_city?: NullableStringFieldUpdateOperationsInput | string | null
    pi_state?: NullableStringFieldUpdateOperationsInput | string | null
    pi_pincode?: NullableStringFieldUpdateOperationsInput | string | null
    pi_landmark?: NullableStringFieldUpdateOperationsInput | string | null
    pi_anniversaryDate?: NullableStringFieldUpdateOperationsInput | string | null
    ref_nameOfTheperson?: NullableStringFieldUpdateOperationsInput | string | null
    ref_place?: NullableStringFieldUpdateOperationsInput | string | null
    sod_nameOfTheDealer?: NullableStringFieldUpdateOperationsInput | string | null
    sod_place?: NullableStringFieldUpdateOperationsInput | string | null
    photoProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    idProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackPath?: NullableStringFieldUpdateOperationsInput | string | null
    isContacted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPending?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRejected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shop_location?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Address1?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Address2?: NullableStringFieldUpdateOperationsInput | string | null
    shop_District?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Taluk?: NullableStringFieldUpdateOperationsInput | string | null
    shop_City?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Pincode?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Landmark?: NullableStringFieldUpdateOperationsInput | string | null
    enteredBy?: NullableStringFieldUpdateOperationsInput | string | null
    enteredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    formType?: StringFieldUpdateOperationsInput | string
    skPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    validationOtpGenerated?: NullableStringFieldUpdateOperationsInput | string | null
    registeringDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pi_firstName?: NullableStringFieldUpdateOperationsInput | string | null
    pi_lastName?: NullableStringFieldUpdateOperationsInput | string | null
    pi_profession?: NullableStringFieldUpdateOperationsInput | string | null
    pi_dob?: NullableStringFieldUpdateOperationsInput | string | null
    pi_phone?: NullableStringFieldUpdateOperationsInput | string | null
    pi_whatsAppNumber?: NullableStringFieldUpdateOperationsInput | string | null
    pi_emailId?: NullableStringFieldUpdateOperationsInput | string | null
    pi_addressLane1?: NullableStringFieldUpdateOperationsInput | string | null
    pi_addressLane2?: NullableStringFieldUpdateOperationsInput | string | null
    pi_taluk?: NullableStringFieldUpdateOperationsInput | string | null
    pi_district?: NullableStringFieldUpdateOperationsInput | string | null
    pi_city?: NullableStringFieldUpdateOperationsInput | string | null
    pi_state?: NullableStringFieldUpdateOperationsInput | string | null
    pi_pincode?: NullableStringFieldUpdateOperationsInput | string | null
    pi_landmark?: NullableStringFieldUpdateOperationsInput | string | null
    pi_anniversaryDate?: NullableStringFieldUpdateOperationsInput | string | null
    ref_nameOfTheperson?: NullableStringFieldUpdateOperationsInput | string | null
    ref_place?: NullableStringFieldUpdateOperationsInput | string | null
    sod_nameOfTheDealer?: NullableStringFieldUpdateOperationsInput | string | null
    sod_place?: NullableStringFieldUpdateOperationsInput | string | null
    photoProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    idProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackPath?: NullableStringFieldUpdateOperationsInput | string | null
    isContacted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPending?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRejected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shop_location?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Address1?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Address2?: NullableStringFieldUpdateOperationsInput | string | null
    shop_District?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Taluk?: NullableStringFieldUpdateOperationsInput | string | null
    shop_City?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Pincode?: NullableStringFieldUpdateOperationsInput | string | null
    shop_Landmark?: NullableStringFieldUpdateOperationsInput | string | null
    enteredBy?: NullableStringFieldUpdateOperationsInput | string | null
    enteredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FormSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    legacyId?: SortOrder
    formType?: SortOrder
    skPassportNo?: SortOrder
    validationOtpGenerated?: SortOrder
    registeringDate?: SortOrder
    pi_firstName?: SortOrder
    pi_lastName?: SortOrder
    pi_profession?: SortOrder
    pi_dob?: SortOrder
    pi_phone?: SortOrder
    pi_whatsAppNumber?: SortOrder
    pi_emailId?: SortOrder
    pi_addressLane1?: SortOrder
    pi_addressLane2?: SortOrder
    pi_taluk?: SortOrder
    pi_district?: SortOrder
    pi_city?: SortOrder
    pi_state?: SortOrder
    pi_pincode?: SortOrder
    pi_landmark?: SortOrder
    pi_anniversaryDate?: SortOrder
    ref_nameOfTheperson?: SortOrder
    ref_place?: SortOrder
    sod_nameOfTheDealer?: SortOrder
    sod_place?: SortOrder
    photoProofPath?: SortOrder
    idProofPath?: SortOrder
    idProofBackPath?: SortOrder
    isContacted?: SortOrder
    isApproved?: SortOrder
    isDeleted?: SortOrder
    isActive?: SortOrder
    isPending?: SortOrder
    isRejected?: SortOrder
    shop_location?: SortOrder
    shop_Address1?: SortOrder
    shop_Address2?: SortOrder
    shop_District?: SortOrder
    shop_Taluk?: SortOrder
    shop_City?: SortOrder
    shop_Pincode?: SortOrder
    shop_Landmark?: SortOrder
    enteredBy?: SortOrder
    enteredDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photoProofData?: SortOrder
    idProofData?: SortOrder
    idProofBackData?: SortOrder
  }

  export type FormSubmissionAvgOrderByAggregateInput = {
    legacyId?: SortOrder
  }

  export type FormSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    legacyId?: SortOrder
    formType?: SortOrder
    skPassportNo?: SortOrder
    validationOtpGenerated?: SortOrder
    registeringDate?: SortOrder
    pi_firstName?: SortOrder
    pi_lastName?: SortOrder
    pi_profession?: SortOrder
    pi_dob?: SortOrder
    pi_phone?: SortOrder
    pi_whatsAppNumber?: SortOrder
    pi_emailId?: SortOrder
    pi_addressLane1?: SortOrder
    pi_addressLane2?: SortOrder
    pi_taluk?: SortOrder
    pi_district?: SortOrder
    pi_city?: SortOrder
    pi_state?: SortOrder
    pi_pincode?: SortOrder
    pi_landmark?: SortOrder
    pi_anniversaryDate?: SortOrder
    ref_nameOfTheperson?: SortOrder
    ref_place?: SortOrder
    sod_nameOfTheDealer?: SortOrder
    sod_place?: SortOrder
    photoProofPath?: SortOrder
    idProofPath?: SortOrder
    idProofBackPath?: SortOrder
    isContacted?: SortOrder
    isApproved?: SortOrder
    isDeleted?: SortOrder
    isActive?: SortOrder
    isPending?: SortOrder
    isRejected?: SortOrder
    shop_location?: SortOrder
    shop_Address1?: SortOrder
    shop_Address2?: SortOrder
    shop_District?: SortOrder
    shop_Taluk?: SortOrder
    shop_City?: SortOrder
    shop_Pincode?: SortOrder
    shop_Landmark?: SortOrder
    enteredBy?: SortOrder
    enteredDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photoProofData?: SortOrder
    idProofData?: SortOrder
    idProofBackData?: SortOrder
  }

  export type FormSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    legacyId?: SortOrder
    formType?: SortOrder
    skPassportNo?: SortOrder
    validationOtpGenerated?: SortOrder
    registeringDate?: SortOrder
    pi_firstName?: SortOrder
    pi_lastName?: SortOrder
    pi_profession?: SortOrder
    pi_dob?: SortOrder
    pi_phone?: SortOrder
    pi_whatsAppNumber?: SortOrder
    pi_emailId?: SortOrder
    pi_addressLane1?: SortOrder
    pi_addressLane2?: SortOrder
    pi_taluk?: SortOrder
    pi_district?: SortOrder
    pi_city?: SortOrder
    pi_state?: SortOrder
    pi_pincode?: SortOrder
    pi_landmark?: SortOrder
    pi_anniversaryDate?: SortOrder
    ref_nameOfTheperson?: SortOrder
    ref_place?: SortOrder
    sod_nameOfTheDealer?: SortOrder
    sod_place?: SortOrder
    photoProofPath?: SortOrder
    idProofPath?: SortOrder
    idProofBackPath?: SortOrder
    isContacted?: SortOrder
    isApproved?: SortOrder
    isDeleted?: SortOrder
    isActive?: SortOrder
    isPending?: SortOrder
    isRejected?: SortOrder
    shop_location?: SortOrder
    shop_Address1?: SortOrder
    shop_Address2?: SortOrder
    shop_District?: SortOrder
    shop_Taluk?: SortOrder
    shop_City?: SortOrder
    shop_Pincode?: SortOrder
    shop_Landmark?: SortOrder
    enteredBy?: SortOrder
    enteredDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photoProofData?: SortOrder
    idProofData?: SortOrder
    idProofBackData?: SortOrder
  }

  export type FormSubmissionSumOrderByAggregateInput = {
    legacyId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}