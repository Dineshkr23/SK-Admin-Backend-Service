
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
 * Model LegacyRegistration
 * *
 *  * Stores legacy import source rows (idempotent, resumable).
 *  * Allows preserving duplicates from the legacy DB (passport numbers, legacy ids, etc.)
 *  * while still linking each legacy row to its canonical FormSubmission.
 */
export type LegacyRegistration = $Result.DefaultSelection<Prisma.$LegacyRegistrationPayload>
/**
 * Model LegacyBlob
 * *
 *  * Legacy base64 blobs moved off the hot path.
 *  * The API should not return these by default.
 */
export type LegacyBlob = $Result.DefaultSelection<Prisma.$LegacyBlobPayload>
/**
 * Model PassportCounter
 * *
 *  * Transactional counter to allocate strictly sequential SK passports.
 *  * Using a table (not a Postgres sequence) keeps allocation rollback-safe.
 */
export type PassportCounter = $Result.DefaultSelection<Prisma.$PassportCounterPayload>
/**
 * Model SalesOfficer
 * 
 */
export type SalesOfficer = $Result.DefaultSelection<Prisma.$SalesOfficerPayload>
/**
 * Model ReportingManager
 * 
 */
export type ReportingManager = $Result.DefaultSelection<Prisma.$ReportingManagerPayload>
/**
 * Model GlobalPrice
 * *
 *  * Stores a single global price configuration value.
 *  * We keep it independent from submissions and related tables.
 */
export type GlobalPrice = $Result.DefaultSelection<Prisma.$GlobalPricePayload>

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

  /**
   * `prisma.legacyRegistration`: Exposes CRUD operations for the **LegacyRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegacyRegistrations
    * const legacyRegistrations = await prisma.legacyRegistration.findMany()
    * ```
    */
  get legacyRegistration(): Prisma.LegacyRegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.legacyBlob`: Exposes CRUD operations for the **LegacyBlob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegacyBlobs
    * const legacyBlobs = await prisma.legacyBlob.findMany()
    * ```
    */
  get legacyBlob(): Prisma.LegacyBlobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passportCounter`: Exposes CRUD operations for the **PassportCounter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PassportCounters
    * const passportCounters = await prisma.passportCounter.findMany()
    * ```
    */
  get passportCounter(): Prisma.PassportCounterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesOfficer`: Exposes CRUD operations for the **SalesOfficer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesOfficers
    * const salesOfficers = await prisma.salesOfficer.findMany()
    * ```
    */
  get salesOfficer(): Prisma.SalesOfficerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reportingManager`: Exposes CRUD operations for the **ReportingManager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportingManagers
    * const reportingManagers = await prisma.reportingManager.findMany()
    * ```
    */
  get reportingManager(): Prisma.ReportingManagerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalPrice`: Exposes CRUD operations for the **GlobalPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalPrices
    * const globalPrices = await prisma.globalPrice.findMany()
    * ```
    */
  get globalPrice(): Prisma.GlobalPriceDelegate<ExtArgs, ClientOptions>;
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
    FormSubmission: 'FormSubmission',
    LegacyRegistration: 'LegacyRegistration',
    LegacyBlob: 'LegacyBlob',
    PassportCounter: 'PassportCounter',
    SalesOfficer: 'SalesOfficer',
    ReportingManager: 'ReportingManager',
    GlobalPrice: 'GlobalPrice'
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
      modelProps: "adminUser" | "formSubmission" | "legacyRegistration" | "legacyBlob" | "passportCounter" | "salesOfficer" | "reportingManager" | "globalPrice"
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
      LegacyRegistration: {
        payload: Prisma.$LegacyRegistrationPayload<ExtArgs>
        fields: Prisma.LegacyRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegacyRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegacyRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyRegistrationPayload>
          }
          findFirst: {
            args: Prisma.LegacyRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegacyRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyRegistrationPayload>
          }
          findMany: {
            args: Prisma.LegacyRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyRegistrationPayload>[]
          }
          create: {
            args: Prisma.LegacyRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyRegistrationPayload>
          }
          createMany: {
            args: Prisma.LegacyRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LegacyRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyRegistrationPayload>[]
          }
          delete: {
            args: Prisma.LegacyRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyRegistrationPayload>
          }
          update: {
            args: Prisma.LegacyRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.LegacyRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegacyRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LegacyRegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyRegistrationPayload>[]
          }
          upsert: {
            args: Prisma.LegacyRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyRegistrationPayload>
          }
          aggregate: {
            args: Prisma.LegacyRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegacyRegistration>
          }
          groupBy: {
            args: Prisma.LegacyRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegacyRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegacyRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<LegacyRegistrationCountAggregateOutputType> | number
          }
        }
      }
      LegacyBlob: {
        payload: Prisma.$LegacyBlobPayload<ExtArgs>
        fields: Prisma.LegacyBlobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegacyBlobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyBlobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegacyBlobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyBlobPayload>
          }
          findFirst: {
            args: Prisma.LegacyBlobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyBlobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegacyBlobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyBlobPayload>
          }
          findMany: {
            args: Prisma.LegacyBlobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyBlobPayload>[]
          }
          create: {
            args: Prisma.LegacyBlobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyBlobPayload>
          }
          createMany: {
            args: Prisma.LegacyBlobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LegacyBlobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyBlobPayload>[]
          }
          delete: {
            args: Prisma.LegacyBlobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyBlobPayload>
          }
          update: {
            args: Prisma.LegacyBlobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyBlobPayload>
          }
          deleteMany: {
            args: Prisma.LegacyBlobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegacyBlobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LegacyBlobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyBlobPayload>[]
          }
          upsert: {
            args: Prisma.LegacyBlobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyBlobPayload>
          }
          aggregate: {
            args: Prisma.LegacyBlobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegacyBlob>
          }
          groupBy: {
            args: Prisma.LegacyBlobGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegacyBlobGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegacyBlobCountArgs<ExtArgs>
            result: $Utils.Optional<LegacyBlobCountAggregateOutputType> | number
          }
        }
      }
      PassportCounter: {
        payload: Prisma.$PassportCounterPayload<ExtArgs>
        fields: Prisma.PassportCounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassportCounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportCounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassportCounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportCounterPayload>
          }
          findFirst: {
            args: Prisma.PassportCounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportCounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassportCounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportCounterPayload>
          }
          findMany: {
            args: Prisma.PassportCounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportCounterPayload>[]
          }
          create: {
            args: Prisma.PassportCounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportCounterPayload>
          }
          createMany: {
            args: Prisma.PassportCounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PassportCounterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportCounterPayload>[]
          }
          delete: {
            args: Prisma.PassportCounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportCounterPayload>
          }
          update: {
            args: Prisma.PassportCounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportCounterPayload>
          }
          deleteMany: {
            args: Prisma.PassportCounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PassportCounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PassportCounterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportCounterPayload>[]
          }
          upsert: {
            args: Prisma.PassportCounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportCounterPayload>
          }
          aggregate: {
            args: Prisma.PassportCounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassportCounter>
          }
          groupBy: {
            args: Prisma.PassportCounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassportCounterGroupByOutputType>[]
          }
          count: {
            args: Prisma.PassportCounterCountArgs<ExtArgs>
            result: $Utils.Optional<PassportCounterCountAggregateOutputType> | number
          }
        }
      }
      SalesOfficer: {
        payload: Prisma.$SalesOfficerPayload<ExtArgs>
        fields: Prisma.SalesOfficerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesOfficerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOfficerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesOfficerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOfficerPayload>
          }
          findFirst: {
            args: Prisma.SalesOfficerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOfficerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesOfficerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOfficerPayload>
          }
          findMany: {
            args: Prisma.SalesOfficerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOfficerPayload>[]
          }
          create: {
            args: Prisma.SalesOfficerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOfficerPayload>
          }
          createMany: {
            args: Prisma.SalesOfficerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesOfficerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOfficerPayload>[]
          }
          delete: {
            args: Prisma.SalesOfficerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOfficerPayload>
          }
          update: {
            args: Prisma.SalesOfficerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOfficerPayload>
          }
          deleteMany: {
            args: Prisma.SalesOfficerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesOfficerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesOfficerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOfficerPayload>[]
          }
          upsert: {
            args: Prisma.SalesOfficerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOfficerPayload>
          }
          aggregate: {
            args: Prisma.SalesOfficerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesOfficer>
          }
          groupBy: {
            args: Prisma.SalesOfficerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesOfficerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesOfficerCountArgs<ExtArgs>
            result: $Utils.Optional<SalesOfficerCountAggregateOutputType> | number
          }
        }
      }
      ReportingManager: {
        payload: Prisma.$ReportingManagerPayload<ExtArgs>
        fields: Prisma.ReportingManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportingManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportingManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportingManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportingManagerPayload>
          }
          findFirst: {
            args: Prisma.ReportingManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportingManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportingManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportingManagerPayload>
          }
          findMany: {
            args: Prisma.ReportingManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportingManagerPayload>[]
          }
          create: {
            args: Prisma.ReportingManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportingManagerPayload>
          }
          createMany: {
            args: Prisma.ReportingManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportingManagerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportingManagerPayload>[]
          }
          delete: {
            args: Prisma.ReportingManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportingManagerPayload>
          }
          update: {
            args: Prisma.ReportingManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportingManagerPayload>
          }
          deleteMany: {
            args: Prisma.ReportingManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportingManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportingManagerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportingManagerPayload>[]
          }
          upsert: {
            args: Prisma.ReportingManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportingManagerPayload>
          }
          aggregate: {
            args: Prisma.ReportingManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportingManager>
          }
          groupBy: {
            args: Prisma.ReportingManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportingManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportingManagerCountArgs<ExtArgs>
            result: $Utils.Optional<ReportingManagerCountAggregateOutputType> | number
          }
        }
      }
      GlobalPrice: {
        payload: Prisma.$GlobalPricePayload<ExtArgs>
        fields: Prisma.GlobalPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricePayload>
          }
          findFirst: {
            args: Prisma.GlobalPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricePayload>
          }
          findMany: {
            args: Prisma.GlobalPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricePayload>[]
          }
          create: {
            args: Prisma.GlobalPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricePayload>
          }
          createMany: {
            args: Prisma.GlobalPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricePayload>[]
          }
          delete: {
            args: Prisma.GlobalPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricePayload>
          }
          update: {
            args: Prisma.GlobalPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricePayload>
          }
          deleteMany: {
            args: Prisma.GlobalPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricePayload>[]
          }
          upsert: {
            args: Prisma.GlobalPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPricePayload>
          }
          aggregate: {
            args: Prisma.GlobalPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalPrice>
          }
          groupBy: {
            args: Prisma.GlobalPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalPriceCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalPriceCountAggregateOutputType> | number
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
    legacyRegistration?: LegacyRegistrationOmit
    legacyBlob?: LegacyBlobOmit
    passportCounter?: PassportCounterOmit
    salesOfficer?: SalesOfficerOmit
    reportingManager?: ReportingManagerOmit
    globalPrice?: GlobalPriceOmit
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
   * Count Type FormSubmissionCountOutputType
   */

  export type FormSubmissionCountOutputType = {
    legacyRegistrations: number
  }

  export type FormSubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legacyRegistrations?: boolean | FormSubmissionCountOutputTypeCountLegacyRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * FormSubmissionCountOutputType without action
   */
  export type FormSubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionCountOutputType
     */
    select?: FormSubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormSubmissionCountOutputType without action
   */
  export type FormSubmissionCountOutputTypeCountLegacyRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegacyRegistrationWhereInput
  }


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
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
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
    role: string
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
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: string
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
    readonly role: FieldRef<"AdminUser", 'String'>
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
    skPassportSeq: number | null
  }

  export type FormSubmissionSumAggregateOutputType = {
    legacyId: number | null
    skPassportSeq: bigint | null
  }

  export type FormSubmissionMinAggregateOutputType = {
    id: string | null
    legacyId: number | null
    formType: string | null
    skPassportNo: string | null
    skPassportSeq: bigint | null
    validationOtpGenerated: string | null
    title: string | null
    age: string | null
    sameAsAbove: boolean | null
    remarks: string | null
    validationCode: string | null
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
    reporting_manager_name: string | null
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
    panProofPath: string | null
    panProofData: string | null
    dealershipName: string | null
    contactPerson: string | null
    gstNumber: string | null
    panNumber: string | null
    ownerSameAsAbove: boolean | null
    ownerTitle: string | null
    ownerFirstName: string | null
    ownerLastName: string | null
    ownerOfficeAddressLine1: string | null
    ownerOfficeAddressLine2: string | null
    ownerCity: string | null
    ownerState: string | null
    ownerPostalCode: string | null
    ownerPlace: string | null
    ownerPhoneNumber: string | null
    ownerEmailId: string | null
    secondContactTitle: string | null
    secondContactFirstName: string | null
    secondContactLastName: string | null
    secondContactPhone: string | null
    secondContactEmail: string | null
    spouseName: string | null
    spouseDob: string | null
    weddingDay: string | null
    childName1: string | null
    childDob1: string | null
    childName2: string | null
    childDob2: string | null
    childName3: string | null
    childDob3: string | null
    godownSameAsCompany: boolean | null
    godownAddressLine1: string | null
    godownAddressLine2: string | null
    godownCity: string | null
    godownState: string | null
    godownPostalCode: string | null
    godownContactPerson: string | null
    godownContactMobile: string | null
    referenceName1: string | null
    referencePhone1: string | null
    referenceDetails1: string | null
    referenceName2: string | null
    referencePhone2: string | null
    referenceDetails2: string | null
  }

  export type FormSubmissionMaxAggregateOutputType = {
    id: string | null
    legacyId: number | null
    formType: string | null
    skPassportNo: string | null
    skPassportSeq: bigint | null
    validationOtpGenerated: string | null
    title: string | null
    age: string | null
    sameAsAbove: boolean | null
    remarks: string | null
    validationCode: string | null
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
    reporting_manager_name: string | null
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
    panProofPath: string | null
    panProofData: string | null
    dealershipName: string | null
    contactPerson: string | null
    gstNumber: string | null
    panNumber: string | null
    ownerSameAsAbove: boolean | null
    ownerTitle: string | null
    ownerFirstName: string | null
    ownerLastName: string | null
    ownerOfficeAddressLine1: string | null
    ownerOfficeAddressLine2: string | null
    ownerCity: string | null
    ownerState: string | null
    ownerPostalCode: string | null
    ownerPlace: string | null
    ownerPhoneNumber: string | null
    ownerEmailId: string | null
    secondContactTitle: string | null
    secondContactFirstName: string | null
    secondContactLastName: string | null
    secondContactPhone: string | null
    secondContactEmail: string | null
    spouseName: string | null
    spouseDob: string | null
    weddingDay: string | null
    childName1: string | null
    childDob1: string | null
    childName2: string | null
    childDob2: string | null
    childName3: string | null
    childDob3: string | null
    godownSameAsCompany: boolean | null
    godownAddressLine1: string | null
    godownAddressLine2: string | null
    godownCity: string | null
    godownState: string | null
    godownPostalCode: string | null
    godownContactPerson: string | null
    godownContactMobile: string | null
    referenceName1: string | null
    referencePhone1: string | null
    referenceDetails1: string | null
    referenceName2: string | null
    referencePhone2: string | null
    referenceDetails2: string | null
  }

  export type FormSubmissionCountAggregateOutputType = {
    id: number
    legacyId: number
    formType: number
    skPassportNo: number
    skPassportSeq: number
    validationOtpGenerated: number
    title: number
    age: number
    sameAsAbove: number
    remarks: number
    validationCode: number
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
    reporting_manager_name: number
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
    panProofPath: number
    panProofData: number
    dealershipName: number
    contactPerson: number
    gstNumber: number
    panNumber: number
    ownerSameAsAbove: number
    ownerTitle: number
    ownerFirstName: number
    ownerLastName: number
    ownerOfficeAddressLine1: number
    ownerOfficeAddressLine2: number
    ownerCity: number
    ownerState: number
    ownerPostalCode: number
    ownerPlace: number
    ownerPhoneNumber: number
    ownerEmailId: number
    secondContactTitle: number
    secondContactFirstName: number
    secondContactLastName: number
    secondContactPhone: number
    secondContactEmail: number
    spouseName: number
    spouseDob: number
    weddingDay: number
    childName1: number
    childDob1: number
    childName2: number
    childDob2: number
    childName3: number
    childDob3: number
    godownSameAsCompany: number
    godownAddressLine1: number
    godownAddressLine2: number
    godownCity: number
    godownState: number
    godownPostalCode: number
    godownContactPerson: number
    godownContactMobile: number
    referenceName1: number
    referencePhone1: number
    referenceDetails1: number
    referenceName2: number
    referencePhone2: number
    referenceDetails2: number
    _all: number
  }


  export type FormSubmissionAvgAggregateInputType = {
    legacyId?: true
    skPassportSeq?: true
  }

  export type FormSubmissionSumAggregateInputType = {
    legacyId?: true
    skPassportSeq?: true
  }

  export type FormSubmissionMinAggregateInputType = {
    id?: true
    legacyId?: true
    formType?: true
    skPassportNo?: true
    skPassportSeq?: true
    validationOtpGenerated?: true
    title?: true
    age?: true
    sameAsAbove?: true
    remarks?: true
    validationCode?: true
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
    reporting_manager_name?: true
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
    panProofPath?: true
    panProofData?: true
    dealershipName?: true
    contactPerson?: true
    gstNumber?: true
    panNumber?: true
    ownerSameAsAbove?: true
    ownerTitle?: true
    ownerFirstName?: true
    ownerLastName?: true
    ownerOfficeAddressLine1?: true
    ownerOfficeAddressLine2?: true
    ownerCity?: true
    ownerState?: true
    ownerPostalCode?: true
    ownerPlace?: true
    ownerPhoneNumber?: true
    ownerEmailId?: true
    secondContactTitle?: true
    secondContactFirstName?: true
    secondContactLastName?: true
    secondContactPhone?: true
    secondContactEmail?: true
    spouseName?: true
    spouseDob?: true
    weddingDay?: true
    childName1?: true
    childDob1?: true
    childName2?: true
    childDob2?: true
    childName3?: true
    childDob3?: true
    godownSameAsCompany?: true
    godownAddressLine1?: true
    godownAddressLine2?: true
    godownCity?: true
    godownState?: true
    godownPostalCode?: true
    godownContactPerson?: true
    godownContactMobile?: true
    referenceName1?: true
    referencePhone1?: true
    referenceDetails1?: true
    referenceName2?: true
    referencePhone2?: true
    referenceDetails2?: true
  }

  export type FormSubmissionMaxAggregateInputType = {
    id?: true
    legacyId?: true
    formType?: true
    skPassportNo?: true
    skPassportSeq?: true
    validationOtpGenerated?: true
    title?: true
    age?: true
    sameAsAbove?: true
    remarks?: true
    validationCode?: true
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
    reporting_manager_name?: true
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
    panProofPath?: true
    panProofData?: true
    dealershipName?: true
    contactPerson?: true
    gstNumber?: true
    panNumber?: true
    ownerSameAsAbove?: true
    ownerTitle?: true
    ownerFirstName?: true
    ownerLastName?: true
    ownerOfficeAddressLine1?: true
    ownerOfficeAddressLine2?: true
    ownerCity?: true
    ownerState?: true
    ownerPostalCode?: true
    ownerPlace?: true
    ownerPhoneNumber?: true
    ownerEmailId?: true
    secondContactTitle?: true
    secondContactFirstName?: true
    secondContactLastName?: true
    secondContactPhone?: true
    secondContactEmail?: true
    spouseName?: true
    spouseDob?: true
    weddingDay?: true
    childName1?: true
    childDob1?: true
    childName2?: true
    childDob2?: true
    childName3?: true
    childDob3?: true
    godownSameAsCompany?: true
    godownAddressLine1?: true
    godownAddressLine2?: true
    godownCity?: true
    godownState?: true
    godownPostalCode?: true
    godownContactPerson?: true
    godownContactMobile?: true
    referenceName1?: true
    referencePhone1?: true
    referenceDetails1?: true
    referenceName2?: true
    referencePhone2?: true
    referenceDetails2?: true
  }

  export type FormSubmissionCountAggregateInputType = {
    id?: true
    legacyId?: true
    formType?: true
    skPassportNo?: true
    skPassportSeq?: true
    validationOtpGenerated?: true
    title?: true
    age?: true
    sameAsAbove?: true
    remarks?: true
    validationCode?: true
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
    reporting_manager_name?: true
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
    panProofPath?: true
    panProofData?: true
    dealershipName?: true
    contactPerson?: true
    gstNumber?: true
    panNumber?: true
    ownerSameAsAbove?: true
    ownerTitle?: true
    ownerFirstName?: true
    ownerLastName?: true
    ownerOfficeAddressLine1?: true
    ownerOfficeAddressLine2?: true
    ownerCity?: true
    ownerState?: true
    ownerPostalCode?: true
    ownerPlace?: true
    ownerPhoneNumber?: true
    ownerEmailId?: true
    secondContactTitle?: true
    secondContactFirstName?: true
    secondContactLastName?: true
    secondContactPhone?: true
    secondContactEmail?: true
    spouseName?: true
    spouseDob?: true
    weddingDay?: true
    childName1?: true
    childDob1?: true
    childName2?: true
    childDob2?: true
    childName3?: true
    childDob3?: true
    godownSameAsCompany?: true
    godownAddressLine1?: true
    godownAddressLine2?: true
    godownCity?: true
    godownState?: true
    godownPostalCode?: true
    godownContactPerson?: true
    godownContactMobile?: true
    referenceName1?: true
    referencePhone1?: true
    referenceDetails1?: true
    referenceName2?: true
    referencePhone2?: true
    referenceDetails2?: true
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
    skPassportSeq: bigint | null
    validationOtpGenerated: string | null
    title: string | null
    age: string | null
    sameAsAbove: boolean | null
    remarks: string | null
    validationCode: string | null
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
    reporting_manager_name: string | null
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
    panProofPath: string | null
    panProofData: string | null
    dealershipName: string | null
    contactPerson: string | null
    gstNumber: string | null
    panNumber: string | null
    ownerSameAsAbove: boolean | null
    ownerTitle: string | null
    ownerFirstName: string | null
    ownerLastName: string | null
    ownerOfficeAddressLine1: string | null
    ownerOfficeAddressLine2: string | null
    ownerCity: string | null
    ownerState: string | null
    ownerPostalCode: string | null
    ownerPlace: string | null
    ownerPhoneNumber: string | null
    ownerEmailId: string | null
    secondContactTitle: string | null
    secondContactFirstName: string | null
    secondContactLastName: string | null
    secondContactPhone: string | null
    secondContactEmail: string | null
    spouseName: string | null
    spouseDob: string | null
    weddingDay: string | null
    childName1: string | null
    childDob1: string | null
    childName2: string | null
    childDob2: string | null
    childName3: string | null
    childDob3: string | null
    godownSameAsCompany: boolean | null
    godownAddressLine1: string | null
    godownAddressLine2: string | null
    godownCity: string | null
    godownState: string | null
    godownPostalCode: string | null
    godownContactPerson: string | null
    godownContactMobile: string | null
    referenceName1: string | null
    referencePhone1: string | null
    referenceDetails1: string | null
    referenceName2: string | null
    referencePhone2: string | null
    referenceDetails2: string | null
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
    skPassportSeq?: boolean
    validationOtpGenerated?: boolean
    title?: boolean
    age?: boolean
    sameAsAbove?: boolean
    remarks?: boolean
    validationCode?: boolean
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
    reporting_manager_name?: boolean
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
    panProofPath?: boolean
    panProofData?: boolean
    dealershipName?: boolean
    contactPerson?: boolean
    gstNumber?: boolean
    panNumber?: boolean
    ownerSameAsAbove?: boolean
    ownerTitle?: boolean
    ownerFirstName?: boolean
    ownerLastName?: boolean
    ownerOfficeAddressLine1?: boolean
    ownerOfficeAddressLine2?: boolean
    ownerCity?: boolean
    ownerState?: boolean
    ownerPostalCode?: boolean
    ownerPlace?: boolean
    ownerPhoneNumber?: boolean
    ownerEmailId?: boolean
    secondContactTitle?: boolean
    secondContactFirstName?: boolean
    secondContactLastName?: boolean
    secondContactPhone?: boolean
    secondContactEmail?: boolean
    spouseName?: boolean
    spouseDob?: boolean
    weddingDay?: boolean
    childName1?: boolean
    childDob1?: boolean
    childName2?: boolean
    childDob2?: boolean
    childName3?: boolean
    childDob3?: boolean
    godownSameAsCompany?: boolean
    godownAddressLine1?: boolean
    godownAddressLine2?: boolean
    godownCity?: boolean
    godownState?: boolean
    godownPostalCode?: boolean
    godownContactPerson?: boolean
    godownContactMobile?: boolean
    referenceName1?: boolean
    referencePhone1?: boolean
    referenceDetails1?: boolean
    referenceName2?: boolean
    referencePhone2?: boolean
    referenceDetails2?: boolean
    legacyRegistrations?: boolean | FormSubmission$legacyRegistrationsArgs<ExtArgs>
    legacyBlob?: boolean | FormSubmission$legacyBlobArgs<ExtArgs>
    _count?: boolean | FormSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legacyId?: boolean
    formType?: boolean
    skPassportNo?: boolean
    skPassportSeq?: boolean
    validationOtpGenerated?: boolean
    title?: boolean
    age?: boolean
    sameAsAbove?: boolean
    remarks?: boolean
    validationCode?: boolean
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
    reporting_manager_name?: boolean
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
    panProofPath?: boolean
    panProofData?: boolean
    dealershipName?: boolean
    contactPerson?: boolean
    gstNumber?: boolean
    panNumber?: boolean
    ownerSameAsAbove?: boolean
    ownerTitle?: boolean
    ownerFirstName?: boolean
    ownerLastName?: boolean
    ownerOfficeAddressLine1?: boolean
    ownerOfficeAddressLine2?: boolean
    ownerCity?: boolean
    ownerState?: boolean
    ownerPostalCode?: boolean
    ownerPlace?: boolean
    ownerPhoneNumber?: boolean
    ownerEmailId?: boolean
    secondContactTitle?: boolean
    secondContactFirstName?: boolean
    secondContactLastName?: boolean
    secondContactPhone?: boolean
    secondContactEmail?: boolean
    spouseName?: boolean
    spouseDob?: boolean
    weddingDay?: boolean
    childName1?: boolean
    childDob1?: boolean
    childName2?: boolean
    childDob2?: boolean
    childName3?: boolean
    childDob3?: boolean
    godownSameAsCompany?: boolean
    godownAddressLine1?: boolean
    godownAddressLine2?: boolean
    godownCity?: boolean
    godownState?: boolean
    godownPostalCode?: boolean
    godownContactPerson?: boolean
    godownContactMobile?: boolean
    referenceName1?: boolean
    referencePhone1?: boolean
    referenceDetails1?: boolean
    referenceName2?: boolean
    referencePhone2?: boolean
    referenceDetails2?: boolean
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legacyId?: boolean
    formType?: boolean
    skPassportNo?: boolean
    skPassportSeq?: boolean
    validationOtpGenerated?: boolean
    title?: boolean
    age?: boolean
    sameAsAbove?: boolean
    remarks?: boolean
    validationCode?: boolean
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
    reporting_manager_name?: boolean
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
    panProofPath?: boolean
    panProofData?: boolean
    dealershipName?: boolean
    contactPerson?: boolean
    gstNumber?: boolean
    panNumber?: boolean
    ownerSameAsAbove?: boolean
    ownerTitle?: boolean
    ownerFirstName?: boolean
    ownerLastName?: boolean
    ownerOfficeAddressLine1?: boolean
    ownerOfficeAddressLine2?: boolean
    ownerCity?: boolean
    ownerState?: boolean
    ownerPostalCode?: boolean
    ownerPlace?: boolean
    ownerPhoneNumber?: boolean
    ownerEmailId?: boolean
    secondContactTitle?: boolean
    secondContactFirstName?: boolean
    secondContactLastName?: boolean
    secondContactPhone?: boolean
    secondContactEmail?: boolean
    spouseName?: boolean
    spouseDob?: boolean
    weddingDay?: boolean
    childName1?: boolean
    childDob1?: boolean
    childName2?: boolean
    childDob2?: boolean
    childName3?: boolean
    childDob3?: boolean
    godownSameAsCompany?: boolean
    godownAddressLine1?: boolean
    godownAddressLine2?: boolean
    godownCity?: boolean
    godownState?: boolean
    godownPostalCode?: boolean
    godownContactPerson?: boolean
    godownContactMobile?: boolean
    referenceName1?: boolean
    referencePhone1?: boolean
    referenceDetails1?: boolean
    referenceName2?: boolean
    referencePhone2?: boolean
    referenceDetails2?: boolean
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectScalar = {
    id?: boolean
    legacyId?: boolean
    formType?: boolean
    skPassportNo?: boolean
    skPassportSeq?: boolean
    validationOtpGenerated?: boolean
    title?: boolean
    age?: boolean
    sameAsAbove?: boolean
    remarks?: boolean
    validationCode?: boolean
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
    reporting_manager_name?: boolean
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
    panProofPath?: boolean
    panProofData?: boolean
    dealershipName?: boolean
    contactPerson?: boolean
    gstNumber?: boolean
    panNumber?: boolean
    ownerSameAsAbove?: boolean
    ownerTitle?: boolean
    ownerFirstName?: boolean
    ownerLastName?: boolean
    ownerOfficeAddressLine1?: boolean
    ownerOfficeAddressLine2?: boolean
    ownerCity?: boolean
    ownerState?: boolean
    ownerPostalCode?: boolean
    ownerPlace?: boolean
    ownerPhoneNumber?: boolean
    ownerEmailId?: boolean
    secondContactTitle?: boolean
    secondContactFirstName?: boolean
    secondContactLastName?: boolean
    secondContactPhone?: boolean
    secondContactEmail?: boolean
    spouseName?: boolean
    spouseDob?: boolean
    weddingDay?: boolean
    childName1?: boolean
    childDob1?: boolean
    childName2?: boolean
    childDob2?: boolean
    childName3?: boolean
    childDob3?: boolean
    godownSameAsCompany?: boolean
    godownAddressLine1?: boolean
    godownAddressLine2?: boolean
    godownCity?: boolean
    godownState?: boolean
    godownPostalCode?: boolean
    godownContactPerson?: boolean
    godownContactMobile?: boolean
    referenceName1?: boolean
    referencePhone1?: boolean
    referenceDetails1?: boolean
    referenceName2?: boolean
    referencePhone2?: boolean
    referenceDetails2?: boolean
  }

  export type FormSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "legacyId" | "formType" | "skPassportNo" | "skPassportSeq" | "validationOtpGenerated" | "title" | "age" | "sameAsAbove" | "remarks" | "validationCode" | "registeringDate" | "pi_firstName" | "pi_lastName" | "pi_profession" | "pi_dob" | "pi_phone" | "pi_whatsAppNumber" | "pi_emailId" | "pi_addressLane1" | "pi_addressLane2" | "pi_taluk" | "pi_district" | "pi_city" | "pi_state" | "pi_pincode" | "pi_landmark" | "pi_anniversaryDate" | "ref_nameOfTheperson" | "ref_place" | "reporting_manager_name" | "sod_nameOfTheDealer" | "sod_place" | "photoProofPath" | "idProofPath" | "idProofBackPath" | "isContacted" | "isApproved" | "isDeleted" | "isActive" | "isPending" | "isRejected" | "shop_location" | "shop_Address1" | "shop_Address2" | "shop_District" | "shop_Taluk" | "shop_City" | "shop_Pincode" | "shop_Landmark" | "enteredBy" | "enteredDate" | "createdAt" | "updatedAt" | "photoProofData" | "idProofData" | "idProofBackData" | "panProofPath" | "panProofData" | "dealershipName" | "contactPerson" | "gstNumber" | "panNumber" | "ownerSameAsAbove" | "ownerTitle" | "ownerFirstName" | "ownerLastName" | "ownerOfficeAddressLine1" | "ownerOfficeAddressLine2" | "ownerCity" | "ownerState" | "ownerPostalCode" | "ownerPlace" | "ownerPhoneNumber" | "ownerEmailId" | "secondContactTitle" | "secondContactFirstName" | "secondContactLastName" | "secondContactPhone" | "secondContactEmail" | "spouseName" | "spouseDob" | "weddingDay" | "childName1" | "childDob1" | "childName2" | "childDob2" | "childName3" | "childDob3" | "godownSameAsCompany" | "godownAddressLine1" | "godownAddressLine2" | "godownCity" | "godownState" | "godownPostalCode" | "godownContactPerson" | "godownContactMobile" | "referenceName1" | "referencePhone1" | "referenceDetails1" | "referenceName2" | "referencePhone2" | "referenceDetails2", ExtArgs["result"]["formSubmission"]>
  export type FormSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legacyRegistrations?: boolean | FormSubmission$legacyRegistrationsArgs<ExtArgs>
    legacyBlob?: boolean | FormSubmission$legacyBlobArgs<ExtArgs>
    _count?: boolean | FormSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FormSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FormSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormSubmission"
    objects: {
      legacyRegistrations: Prisma.$LegacyRegistrationPayload<ExtArgs>[]
      legacyBlob: Prisma.$LegacyBlobPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      legacyId: number | null
      formType: string
      skPassportNo: string | null
      /**
       * *
       *    * Internal sequential issuer (source of truth) for newly-issued SK passports.
       *    * Legacy rows keep this NULL so duplicate skPassportNo values can coexist.
       */
      skPassportSeq: bigint | null
      validationOtpGenerated: string | null
      title: string | null
      age: string | null
      sameAsAbove: boolean | null
      remarks: string | null
      validationCode: string | null
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
      reporting_manager_name: string | null
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
      panProofPath: string | null
      panProofData: string | null
      dealershipName: string | null
      contactPerson: string | null
      gstNumber: string | null
      panNumber: string | null
      ownerSameAsAbove: boolean | null
      ownerTitle: string | null
      ownerFirstName: string | null
      ownerLastName: string | null
      ownerOfficeAddressLine1: string | null
      ownerOfficeAddressLine2: string | null
      ownerCity: string | null
      ownerState: string | null
      ownerPostalCode: string | null
      ownerPlace: string | null
      ownerPhoneNumber: string | null
      ownerEmailId: string | null
      secondContactTitle: string | null
      secondContactFirstName: string | null
      secondContactLastName: string | null
      secondContactPhone: string | null
      secondContactEmail: string | null
      spouseName: string | null
      spouseDob: string | null
      weddingDay: string | null
      childName1: string | null
      childDob1: string | null
      childName2: string | null
      childDob2: string | null
      childName3: string | null
      childDob3: string | null
      godownSameAsCompany: boolean | null
      godownAddressLine1: string | null
      godownAddressLine2: string | null
      godownCity: string | null
      godownState: string | null
      godownPostalCode: string | null
      godownContactPerson: string | null
      godownContactMobile: string | null
      referenceName1: string | null
      referencePhone1: string | null
      referenceDetails1: string | null
      referenceName2: string | null
      referencePhone2: string | null
      referenceDetails2: string | null
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
    legacyRegistrations<T extends FormSubmission$legacyRegistrationsArgs<ExtArgs> = {}>(args?: Subset<T, FormSubmission$legacyRegistrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegacyRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    legacyBlob<T extends FormSubmission$legacyBlobArgs<ExtArgs> = {}>(args?: Subset<T, FormSubmission$legacyBlobArgs<ExtArgs>>): Prisma__LegacyBlobClient<$Result.GetResult<Prisma.$LegacyBlobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly skPassportSeq: FieldRef<"FormSubmission", 'BigInt'>
    readonly validationOtpGenerated: FieldRef<"FormSubmission", 'String'>
    readonly title: FieldRef<"FormSubmission", 'String'>
    readonly age: FieldRef<"FormSubmission", 'String'>
    readonly sameAsAbove: FieldRef<"FormSubmission", 'Boolean'>
    readonly remarks: FieldRef<"FormSubmission", 'String'>
    readonly validationCode: FieldRef<"FormSubmission", 'String'>
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
    readonly reporting_manager_name: FieldRef<"FormSubmission", 'String'>
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
    readonly panProofPath: FieldRef<"FormSubmission", 'String'>
    readonly panProofData: FieldRef<"FormSubmission", 'String'>
    readonly dealershipName: FieldRef<"FormSubmission", 'String'>
    readonly contactPerson: FieldRef<"FormSubmission", 'String'>
    readonly gstNumber: FieldRef<"FormSubmission", 'String'>
    readonly panNumber: FieldRef<"FormSubmission", 'String'>
    readonly ownerSameAsAbove: FieldRef<"FormSubmission", 'Boolean'>
    readonly ownerTitle: FieldRef<"FormSubmission", 'String'>
    readonly ownerFirstName: FieldRef<"FormSubmission", 'String'>
    readonly ownerLastName: FieldRef<"FormSubmission", 'String'>
    readonly ownerOfficeAddressLine1: FieldRef<"FormSubmission", 'String'>
    readonly ownerOfficeAddressLine2: FieldRef<"FormSubmission", 'String'>
    readonly ownerCity: FieldRef<"FormSubmission", 'String'>
    readonly ownerState: FieldRef<"FormSubmission", 'String'>
    readonly ownerPostalCode: FieldRef<"FormSubmission", 'String'>
    readonly ownerPlace: FieldRef<"FormSubmission", 'String'>
    readonly ownerPhoneNumber: FieldRef<"FormSubmission", 'String'>
    readonly ownerEmailId: FieldRef<"FormSubmission", 'String'>
    readonly secondContactTitle: FieldRef<"FormSubmission", 'String'>
    readonly secondContactFirstName: FieldRef<"FormSubmission", 'String'>
    readonly secondContactLastName: FieldRef<"FormSubmission", 'String'>
    readonly secondContactPhone: FieldRef<"FormSubmission", 'String'>
    readonly secondContactEmail: FieldRef<"FormSubmission", 'String'>
    readonly spouseName: FieldRef<"FormSubmission", 'String'>
    readonly spouseDob: FieldRef<"FormSubmission", 'String'>
    readonly weddingDay: FieldRef<"FormSubmission", 'String'>
    readonly childName1: FieldRef<"FormSubmission", 'String'>
    readonly childDob1: FieldRef<"FormSubmission", 'String'>
    readonly childName2: FieldRef<"FormSubmission", 'String'>
    readonly childDob2: FieldRef<"FormSubmission", 'String'>
    readonly childName3: FieldRef<"FormSubmission", 'String'>
    readonly childDob3: FieldRef<"FormSubmission", 'String'>
    readonly godownSameAsCompany: FieldRef<"FormSubmission", 'Boolean'>
    readonly godownAddressLine1: FieldRef<"FormSubmission", 'String'>
    readonly godownAddressLine2: FieldRef<"FormSubmission", 'String'>
    readonly godownCity: FieldRef<"FormSubmission", 'String'>
    readonly godownState: FieldRef<"FormSubmission", 'String'>
    readonly godownPostalCode: FieldRef<"FormSubmission", 'String'>
    readonly godownContactPerson: FieldRef<"FormSubmission", 'String'>
    readonly godownContactMobile: FieldRef<"FormSubmission", 'String'>
    readonly referenceName1: FieldRef<"FormSubmission", 'String'>
    readonly referencePhone1: FieldRef<"FormSubmission", 'String'>
    readonly referenceDetails1: FieldRef<"FormSubmission", 'String'>
    readonly referenceName2: FieldRef<"FormSubmission", 'String'>
    readonly referencePhone2: FieldRef<"FormSubmission", 'String'>
    readonly referenceDetails2: FieldRef<"FormSubmission", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
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
   * FormSubmission.legacyRegistrations
   */
  export type FormSubmission$legacyRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyRegistration
     */
    select?: LegacyRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyRegistration
     */
    omit?: LegacyRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyRegistrationInclude<ExtArgs> | null
    where?: LegacyRegistrationWhereInput
    orderBy?: LegacyRegistrationOrderByWithRelationInput | LegacyRegistrationOrderByWithRelationInput[]
    cursor?: LegacyRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LegacyRegistrationScalarFieldEnum | LegacyRegistrationScalarFieldEnum[]
  }

  /**
   * FormSubmission.legacyBlob
   */
  export type FormSubmission$legacyBlobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyBlob
     */
    select?: LegacyBlobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyBlob
     */
    omit?: LegacyBlobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyBlobInclude<ExtArgs> | null
    where?: LegacyBlobWhereInput
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model LegacyRegistration
   */

  export type AggregateLegacyRegistration = {
    _count: LegacyRegistrationCountAggregateOutputType | null
    _avg: LegacyRegistrationAvgAggregateOutputType | null
    _sum: LegacyRegistrationSumAggregateOutputType | null
    _min: LegacyRegistrationMinAggregateOutputType | null
    _max: LegacyRegistrationMaxAggregateOutputType | null
  }

  export type LegacyRegistrationAvgAggregateOutputType = {
    legacyRowIndex: number | null
    legacyId: number | null
  }

  export type LegacyRegistrationSumAggregateOutputType = {
    legacyRowIndex: number | null
    legacyId: number | null
  }

  export type LegacyRegistrationMinAggregateOutputType = {
    id: string | null
    legacySource: string | null
    legacyRowIndex: number | null
    legacyId: number | null
    legacyPassportNo: string | null
    submissionId: string | null
    createdAt: Date | null
  }

  export type LegacyRegistrationMaxAggregateOutputType = {
    id: string | null
    legacySource: string | null
    legacyRowIndex: number | null
    legacyId: number | null
    legacyPassportNo: string | null
    submissionId: string | null
    createdAt: Date | null
  }

  export type LegacyRegistrationCountAggregateOutputType = {
    id: number
    legacySource: number
    legacyRowIndex: number
    legacyId: number
    legacyPassportNo: number
    rawTableRecord: number
    rawDetailRecord: number
    submissionId: number
    createdAt: number
    _all: number
  }


  export type LegacyRegistrationAvgAggregateInputType = {
    legacyRowIndex?: true
    legacyId?: true
  }

  export type LegacyRegistrationSumAggregateInputType = {
    legacyRowIndex?: true
    legacyId?: true
  }

  export type LegacyRegistrationMinAggregateInputType = {
    id?: true
    legacySource?: true
    legacyRowIndex?: true
    legacyId?: true
    legacyPassportNo?: true
    submissionId?: true
    createdAt?: true
  }

  export type LegacyRegistrationMaxAggregateInputType = {
    id?: true
    legacySource?: true
    legacyRowIndex?: true
    legacyId?: true
    legacyPassportNo?: true
    submissionId?: true
    createdAt?: true
  }

  export type LegacyRegistrationCountAggregateInputType = {
    id?: true
    legacySource?: true
    legacyRowIndex?: true
    legacyId?: true
    legacyPassportNo?: true
    rawTableRecord?: true
    rawDetailRecord?: true
    submissionId?: true
    createdAt?: true
    _all?: true
  }

  export type LegacyRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegacyRegistration to aggregate.
     */
    where?: LegacyRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyRegistrations to fetch.
     */
    orderBy?: LegacyRegistrationOrderByWithRelationInput | LegacyRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegacyRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegacyRegistrations
    **/
    _count?: true | LegacyRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LegacyRegistrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LegacyRegistrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegacyRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegacyRegistrationMaxAggregateInputType
  }

  export type GetLegacyRegistrationAggregateType<T extends LegacyRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateLegacyRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegacyRegistration[P]>
      : GetScalarType<T[P], AggregateLegacyRegistration[P]>
  }




  export type LegacyRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegacyRegistrationWhereInput
    orderBy?: LegacyRegistrationOrderByWithAggregationInput | LegacyRegistrationOrderByWithAggregationInput[]
    by: LegacyRegistrationScalarFieldEnum[] | LegacyRegistrationScalarFieldEnum
    having?: LegacyRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegacyRegistrationCountAggregateInputType | true
    _avg?: LegacyRegistrationAvgAggregateInputType
    _sum?: LegacyRegistrationSumAggregateInputType
    _min?: LegacyRegistrationMinAggregateInputType
    _max?: LegacyRegistrationMaxAggregateInputType
  }

  export type LegacyRegistrationGroupByOutputType = {
    id: string
    legacySource: string
    legacyRowIndex: number
    legacyId: number | null
    legacyPassportNo: string | null
    rawTableRecord: JsonValue | null
    rawDetailRecord: JsonValue | null
    submissionId: string | null
    createdAt: Date
    _count: LegacyRegistrationCountAggregateOutputType | null
    _avg: LegacyRegistrationAvgAggregateOutputType | null
    _sum: LegacyRegistrationSumAggregateOutputType | null
    _min: LegacyRegistrationMinAggregateOutputType | null
    _max: LegacyRegistrationMaxAggregateOutputType | null
  }

  type GetLegacyRegistrationGroupByPayload<T extends LegacyRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegacyRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegacyRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegacyRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], LegacyRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type LegacyRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legacySource?: boolean
    legacyRowIndex?: boolean
    legacyId?: boolean
    legacyPassportNo?: boolean
    rawTableRecord?: boolean
    rawDetailRecord?: boolean
    submissionId?: boolean
    createdAt?: boolean
    submission?: boolean | LegacyRegistration$submissionArgs<ExtArgs>
  }, ExtArgs["result"]["legacyRegistration"]>

  export type LegacyRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legacySource?: boolean
    legacyRowIndex?: boolean
    legacyId?: boolean
    legacyPassportNo?: boolean
    rawTableRecord?: boolean
    rawDetailRecord?: boolean
    submissionId?: boolean
    createdAt?: boolean
    submission?: boolean | LegacyRegistration$submissionArgs<ExtArgs>
  }, ExtArgs["result"]["legacyRegistration"]>

  export type LegacyRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legacySource?: boolean
    legacyRowIndex?: boolean
    legacyId?: boolean
    legacyPassportNo?: boolean
    rawTableRecord?: boolean
    rawDetailRecord?: boolean
    submissionId?: boolean
    createdAt?: boolean
    submission?: boolean | LegacyRegistration$submissionArgs<ExtArgs>
  }, ExtArgs["result"]["legacyRegistration"]>

  export type LegacyRegistrationSelectScalar = {
    id?: boolean
    legacySource?: boolean
    legacyRowIndex?: boolean
    legacyId?: boolean
    legacyPassportNo?: boolean
    rawTableRecord?: boolean
    rawDetailRecord?: boolean
    submissionId?: boolean
    createdAt?: boolean
  }

  export type LegacyRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "legacySource" | "legacyRowIndex" | "legacyId" | "legacyPassportNo" | "rawTableRecord" | "rawDetailRecord" | "submissionId" | "createdAt", ExtArgs["result"]["legacyRegistration"]>
  export type LegacyRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | LegacyRegistration$submissionArgs<ExtArgs>
  }
  export type LegacyRegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | LegacyRegistration$submissionArgs<ExtArgs>
  }
  export type LegacyRegistrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | LegacyRegistration$submissionArgs<ExtArgs>
  }

  export type $LegacyRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegacyRegistration"
    objects: {
      submission: Prisma.$FormSubmissionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      legacySource: string
      legacyRowIndex: number
      legacyId: number | null
      legacyPassportNo: string | null
      rawTableRecord: Prisma.JsonValue | null
      rawDetailRecord: Prisma.JsonValue | null
      submissionId: string | null
      createdAt: Date
    }, ExtArgs["result"]["legacyRegistration"]>
    composites: {}
  }

  type LegacyRegistrationGetPayload<S extends boolean | null | undefined | LegacyRegistrationDefaultArgs> = $Result.GetResult<Prisma.$LegacyRegistrationPayload, S>

  type LegacyRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LegacyRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LegacyRegistrationCountAggregateInputType | true
    }

  export interface LegacyRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegacyRegistration'], meta: { name: 'LegacyRegistration' } }
    /**
     * Find zero or one LegacyRegistration that matches the filter.
     * @param {LegacyRegistrationFindUniqueArgs} args - Arguments to find a LegacyRegistration
     * @example
     * // Get one LegacyRegistration
     * const legacyRegistration = await prisma.legacyRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegacyRegistrationFindUniqueArgs>(args: SelectSubset<T, LegacyRegistrationFindUniqueArgs<ExtArgs>>): Prisma__LegacyRegistrationClient<$Result.GetResult<Prisma.$LegacyRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LegacyRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LegacyRegistrationFindUniqueOrThrowArgs} args - Arguments to find a LegacyRegistration
     * @example
     * // Get one LegacyRegistration
     * const legacyRegistration = await prisma.legacyRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegacyRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, LegacyRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegacyRegistrationClient<$Result.GetResult<Prisma.$LegacyRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegacyRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyRegistrationFindFirstArgs} args - Arguments to find a LegacyRegistration
     * @example
     * // Get one LegacyRegistration
     * const legacyRegistration = await prisma.legacyRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegacyRegistrationFindFirstArgs>(args?: SelectSubset<T, LegacyRegistrationFindFirstArgs<ExtArgs>>): Prisma__LegacyRegistrationClient<$Result.GetResult<Prisma.$LegacyRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegacyRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyRegistrationFindFirstOrThrowArgs} args - Arguments to find a LegacyRegistration
     * @example
     * // Get one LegacyRegistration
     * const legacyRegistration = await prisma.legacyRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegacyRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, LegacyRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegacyRegistrationClient<$Result.GetResult<Prisma.$LegacyRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LegacyRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegacyRegistrations
     * const legacyRegistrations = await prisma.legacyRegistration.findMany()
     * 
     * // Get first 10 LegacyRegistrations
     * const legacyRegistrations = await prisma.legacyRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legacyRegistrationWithIdOnly = await prisma.legacyRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegacyRegistrationFindManyArgs>(args?: SelectSubset<T, LegacyRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegacyRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LegacyRegistration.
     * @param {LegacyRegistrationCreateArgs} args - Arguments to create a LegacyRegistration.
     * @example
     * // Create one LegacyRegistration
     * const LegacyRegistration = await prisma.legacyRegistration.create({
     *   data: {
     *     // ... data to create a LegacyRegistration
     *   }
     * })
     * 
     */
    create<T extends LegacyRegistrationCreateArgs>(args: SelectSubset<T, LegacyRegistrationCreateArgs<ExtArgs>>): Prisma__LegacyRegistrationClient<$Result.GetResult<Prisma.$LegacyRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LegacyRegistrations.
     * @param {LegacyRegistrationCreateManyArgs} args - Arguments to create many LegacyRegistrations.
     * @example
     * // Create many LegacyRegistrations
     * const legacyRegistration = await prisma.legacyRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegacyRegistrationCreateManyArgs>(args?: SelectSubset<T, LegacyRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LegacyRegistrations and returns the data saved in the database.
     * @param {LegacyRegistrationCreateManyAndReturnArgs} args - Arguments to create many LegacyRegistrations.
     * @example
     * // Create many LegacyRegistrations
     * const legacyRegistration = await prisma.legacyRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LegacyRegistrations and only return the `id`
     * const legacyRegistrationWithIdOnly = await prisma.legacyRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LegacyRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, LegacyRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegacyRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LegacyRegistration.
     * @param {LegacyRegistrationDeleteArgs} args - Arguments to delete one LegacyRegistration.
     * @example
     * // Delete one LegacyRegistration
     * const LegacyRegistration = await prisma.legacyRegistration.delete({
     *   where: {
     *     // ... filter to delete one LegacyRegistration
     *   }
     * })
     * 
     */
    delete<T extends LegacyRegistrationDeleteArgs>(args: SelectSubset<T, LegacyRegistrationDeleteArgs<ExtArgs>>): Prisma__LegacyRegistrationClient<$Result.GetResult<Prisma.$LegacyRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LegacyRegistration.
     * @param {LegacyRegistrationUpdateArgs} args - Arguments to update one LegacyRegistration.
     * @example
     * // Update one LegacyRegistration
     * const legacyRegistration = await prisma.legacyRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegacyRegistrationUpdateArgs>(args: SelectSubset<T, LegacyRegistrationUpdateArgs<ExtArgs>>): Prisma__LegacyRegistrationClient<$Result.GetResult<Prisma.$LegacyRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LegacyRegistrations.
     * @param {LegacyRegistrationDeleteManyArgs} args - Arguments to filter LegacyRegistrations to delete.
     * @example
     * // Delete a few LegacyRegistrations
     * const { count } = await prisma.legacyRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegacyRegistrationDeleteManyArgs>(args?: SelectSubset<T, LegacyRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegacyRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegacyRegistrations
     * const legacyRegistration = await prisma.legacyRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegacyRegistrationUpdateManyArgs>(args: SelectSubset<T, LegacyRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegacyRegistrations and returns the data updated in the database.
     * @param {LegacyRegistrationUpdateManyAndReturnArgs} args - Arguments to update many LegacyRegistrations.
     * @example
     * // Update many LegacyRegistrations
     * const legacyRegistration = await prisma.legacyRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LegacyRegistrations and only return the `id`
     * const legacyRegistrationWithIdOnly = await prisma.legacyRegistration.updateManyAndReturn({
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
    updateManyAndReturn<T extends LegacyRegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, LegacyRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegacyRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LegacyRegistration.
     * @param {LegacyRegistrationUpsertArgs} args - Arguments to update or create a LegacyRegistration.
     * @example
     * // Update or create a LegacyRegistration
     * const legacyRegistration = await prisma.legacyRegistration.upsert({
     *   create: {
     *     // ... data to create a LegacyRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegacyRegistration we want to update
     *   }
     * })
     */
    upsert<T extends LegacyRegistrationUpsertArgs>(args: SelectSubset<T, LegacyRegistrationUpsertArgs<ExtArgs>>): Prisma__LegacyRegistrationClient<$Result.GetResult<Prisma.$LegacyRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LegacyRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyRegistrationCountArgs} args - Arguments to filter LegacyRegistrations to count.
     * @example
     * // Count the number of LegacyRegistrations
     * const count = await prisma.legacyRegistration.count({
     *   where: {
     *     // ... the filter for the LegacyRegistrations we want to count
     *   }
     * })
    **/
    count<T extends LegacyRegistrationCountArgs>(
      args?: Subset<T, LegacyRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegacyRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegacyRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LegacyRegistrationAggregateArgs>(args: Subset<T, LegacyRegistrationAggregateArgs>): Prisma.PrismaPromise<GetLegacyRegistrationAggregateType<T>>

    /**
     * Group by LegacyRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyRegistrationGroupByArgs} args - Group by arguments.
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
      T extends LegacyRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegacyRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: LegacyRegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LegacyRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegacyRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegacyRegistration model
   */
  readonly fields: LegacyRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegacyRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegacyRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends LegacyRegistration$submissionArgs<ExtArgs> = {}>(args?: Subset<T, LegacyRegistration$submissionArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LegacyRegistration model
   */
  interface LegacyRegistrationFieldRefs {
    readonly id: FieldRef<"LegacyRegistration", 'String'>
    readonly legacySource: FieldRef<"LegacyRegistration", 'String'>
    readonly legacyRowIndex: FieldRef<"LegacyRegistration", 'Int'>
    readonly legacyId: FieldRef<"LegacyRegistration", 'Int'>
    readonly legacyPassportNo: FieldRef<"LegacyRegistration", 'String'>
    readonly rawTableRecord: FieldRef<"LegacyRegistration", 'Json'>
    readonly rawDetailRecord: FieldRef<"LegacyRegistration", 'Json'>
    readonly submissionId: FieldRef<"LegacyRegistration", 'String'>
    readonly createdAt: FieldRef<"LegacyRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LegacyRegistration findUnique
   */
  export type LegacyRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyRegistration
     */
    select?: LegacyRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyRegistration
     */
    omit?: LegacyRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which LegacyRegistration to fetch.
     */
    where: LegacyRegistrationWhereUniqueInput
  }

  /**
   * LegacyRegistration findUniqueOrThrow
   */
  export type LegacyRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyRegistration
     */
    select?: LegacyRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyRegistration
     */
    omit?: LegacyRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which LegacyRegistration to fetch.
     */
    where: LegacyRegistrationWhereUniqueInput
  }

  /**
   * LegacyRegistration findFirst
   */
  export type LegacyRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyRegistration
     */
    select?: LegacyRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyRegistration
     */
    omit?: LegacyRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which LegacyRegistration to fetch.
     */
    where?: LegacyRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyRegistrations to fetch.
     */
    orderBy?: LegacyRegistrationOrderByWithRelationInput | LegacyRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegacyRegistrations.
     */
    cursor?: LegacyRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegacyRegistrations.
     */
    distinct?: LegacyRegistrationScalarFieldEnum | LegacyRegistrationScalarFieldEnum[]
  }

  /**
   * LegacyRegistration findFirstOrThrow
   */
  export type LegacyRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyRegistration
     */
    select?: LegacyRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyRegistration
     */
    omit?: LegacyRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which LegacyRegistration to fetch.
     */
    where?: LegacyRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyRegistrations to fetch.
     */
    orderBy?: LegacyRegistrationOrderByWithRelationInput | LegacyRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegacyRegistrations.
     */
    cursor?: LegacyRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegacyRegistrations.
     */
    distinct?: LegacyRegistrationScalarFieldEnum | LegacyRegistrationScalarFieldEnum[]
  }

  /**
   * LegacyRegistration findMany
   */
  export type LegacyRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyRegistration
     */
    select?: LegacyRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyRegistration
     */
    omit?: LegacyRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which LegacyRegistrations to fetch.
     */
    where?: LegacyRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyRegistrations to fetch.
     */
    orderBy?: LegacyRegistrationOrderByWithRelationInput | LegacyRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegacyRegistrations.
     */
    cursor?: LegacyRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegacyRegistrations.
     */
    distinct?: LegacyRegistrationScalarFieldEnum | LegacyRegistrationScalarFieldEnum[]
  }

  /**
   * LegacyRegistration create
   */
  export type LegacyRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyRegistration
     */
    select?: LegacyRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyRegistration
     */
    omit?: LegacyRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a LegacyRegistration.
     */
    data: XOR<LegacyRegistrationCreateInput, LegacyRegistrationUncheckedCreateInput>
  }

  /**
   * LegacyRegistration createMany
   */
  export type LegacyRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegacyRegistrations.
     */
    data: LegacyRegistrationCreateManyInput | LegacyRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LegacyRegistration createManyAndReturn
   */
  export type LegacyRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyRegistration
     */
    select?: LegacyRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyRegistration
     */
    omit?: LegacyRegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many LegacyRegistrations.
     */
    data: LegacyRegistrationCreateManyInput | LegacyRegistrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyRegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LegacyRegistration update
   */
  export type LegacyRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyRegistration
     */
    select?: LegacyRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyRegistration
     */
    omit?: LegacyRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a LegacyRegistration.
     */
    data: XOR<LegacyRegistrationUpdateInput, LegacyRegistrationUncheckedUpdateInput>
    /**
     * Choose, which LegacyRegistration to update.
     */
    where: LegacyRegistrationWhereUniqueInput
  }

  /**
   * LegacyRegistration updateMany
   */
  export type LegacyRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegacyRegistrations.
     */
    data: XOR<LegacyRegistrationUpdateManyMutationInput, LegacyRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which LegacyRegistrations to update
     */
    where?: LegacyRegistrationWhereInput
    /**
     * Limit how many LegacyRegistrations to update.
     */
    limit?: number
  }

  /**
   * LegacyRegistration updateManyAndReturn
   */
  export type LegacyRegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyRegistration
     */
    select?: LegacyRegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyRegistration
     */
    omit?: LegacyRegistrationOmit<ExtArgs> | null
    /**
     * The data used to update LegacyRegistrations.
     */
    data: XOR<LegacyRegistrationUpdateManyMutationInput, LegacyRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which LegacyRegistrations to update
     */
    where?: LegacyRegistrationWhereInput
    /**
     * Limit how many LegacyRegistrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyRegistrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LegacyRegistration upsert
   */
  export type LegacyRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyRegistration
     */
    select?: LegacyRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyRegistration
     */
    omit?: LegacyRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the LegacyRegistration to update in case it exists.
     */
    where: LegacyRegistrationWhereUniqueInput
    /**
     * In case the LegacyRegistration found by the `where` argument doesn't exist, create a new LegacyRegistration with this data.
     */
    create: XOR<LegacyRegistrationCreateInput, LegacyRegistrationUncheckedCreateInput>
    /**
     * In case the LegacyRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegacyRegistrationUpdateInput, LegacyRegistrationUncheckedUpdateInput>
  }

  /**
   * LegacyRegistration delete
   */
  export type LegacyRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyRegistration
     */
    select?: LegacyRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyRegistration
     */
    omit?: LegacyRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyRegistrationInclude<ExtArgs> | null
    /**
     * Filter which LegacyRegistration to delete.
     */
    where: LegacyRegistrationWhereUniqueInput
  }

  /**
   * LegacyRegistration deleteMany
   */
  export type LegacyRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegacyRegistrations to delete
     */
    where?: LegacyRegistrationWhereInput
    /**
     * Limit how many LegacyRegistrations to delete.
     */
    limit?: number
  }

  /**
   * LegacyRegistration.submission
   */
  export type LegacyRegistration$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    where?: FormSubmissionWhereInput
  }

  /**
   * LegacyRegistration without action
   */
  export type LegacyRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyRegistration
     */
    select?: LegacyRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyRegistration
     */
    omit?: LegacyRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyRegistrationInclude<ExtArgs> | null
  }


  /**
   * Model LegacyBlob
   */

  export type AggregateLegacyBlob = {
    _count: LegacyBlobCountAggregateOutputType | null
    _min: LegacyBlobMinAggregateOutputType | null
    _max: LegacyBlobMaxAggregateOutputType | null
  }

  export type LegacyBlobMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    photoProofData: string | null
    idProofData: string | null
    idProofBackData: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LegacyBlobMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    photoProofData: string | null
    idProofData: string | null
    idProofBackData: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LegacyBlobCountAggregateOutputType = {
    id: number
    submissionId: number
    photoProofData: number
    idProofData: number
    idProofBackData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LegacyBlobMinAggregateInputType = {
    id?: true
    submissionId?: true
    photoProofData?: true
    idProofData?: true
    idProofBackData?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LegacyBlobMaxAggregateInputType = {
    id?: true
    submissionId?: true
    photoProofData?: true
    idProofData?: true
    idProofBackData?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LegacyBlobCountAggregateInputType = {
    id?: true
    submissionId?: true
    photoProofData?: true
    idProofData?: true
    idProofBackData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LegacyBlobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegacyBlob to aggregate.
     */
    where?: LegacyBlobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyBlobs to fetch.
     */
    orderBy?: LegacyBlobOrderByWithRelationInput | LegacyBlobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegacyBlobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyBlobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyBlobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegacyBlobs
    **/
    _count?: true | LegacyBlobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegacyBlobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegacyBlobMaxAggregateInputType
  }

  export type GetLegacyBlobAggregateType<T extends LegacyBlobAggregateArgs> = {
        [P in keyof T & keyof AggregateLegacyBlob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegacyBlob[P]>
      : GetScalarType<T[P], AggregateLegacyBlob[P]>
  }




  export type LegacyBlobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegacyBlobWhereInput
    orderBy?: LegacyBlobOrderByWithAggregationInput | LegacyBlobOrderByWithAggregationInput[]
    by: LegacyBlobScalarFieldEnum[] | LegacyBlobScalarFieldEnum
    having?: LegacyBlobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegacyBlobCountAggregateInputType | true
    _min?: LegacyBlobMinAggregateInputType
    _max?: LegacyBlobMaxAggregateInputType
  }

  export type LegacyBlobGroupByOutputType = {
    id: string
    submissionId: string
    photoProofData: string | null
    idProofData: string | null
    idProofBackData: string | null
    createdAt: Date
    updatedAt: Date
    _count: LegacyBlobCountAggregateOutputType | null
    _min: LegacyBlobMinAggregateOutputType | null
    _max: LegacyBlobMaxAggregateOutputType | null
  }

  type GetLegacyBlobGroupByPayload<T extends LegacyBlobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegacyBlobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegacyBlobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegacyBlobGroupByOutputType[P]>
            : GetScalarType<T[P], LegacyBlobGroupByOutputType[P]>
        }
      >
    >


  export type LegacyBlobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    photoProofData?: boolean
    idProofData?: boolean
    idProofBackData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | FormSubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legacyBlob"]>

  export type LegacyBlobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    photoProofData?: boolean
    idProofData?: boolean
    idProofBackData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | FormSubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legacyBlob"]>

  export type LegacyBlobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    photoProofData?: boolean
    idProofData?: boolean
    idProofBackData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | FormSubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legacyBlob"]>

  export type LegacyBlobSelectScalar = {
    id?: boolean
    submissionId?: boolean
    photoProofData?: boolean
    idProofData?: boolean
    idProofBackData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LegacyBlobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "photoProofData" | "idProofData" | "idProofBackData" | "createdAt" | "updatedAt", ExtArgs["result"]["legacyBlob"]>
  export type LegacyBlobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | FormSubmissionDefaultArgs<ExtArgs>
  }
  export type LegacyBlobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | FormSubmissionDefaultArgs<ExtArgs>
  }
  export type LegacyBlobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | FormSubmissionDefaultArgs<ExtArgs>
  }

  export type $LegacyBlobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegacyBlob"
    objects: {
      submission: Prisma.$FormSubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      photoProofData: string | null
      idProofData: string | null
      idProofBackData: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["legacyBlob"]>
    composites: {}
  }

  type LegacyBlobGetPayload<S extends boolean | null | undefined | LegacyBlobDefaultArgs> = $Result.GetResult<Prisma.$LegacyBlobPayload, S>

  type LegacyBlobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LegacyBlobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LegacyBlobCountAggregateInputType | true
    }

  export interface LegacyBlobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegacyBlob'], meta: { name: 'LegacyBlob' } }
    /**
     * Find zero or one LegacyBlob that matches the filter.
     * @param {LegacyBlobFindUniqueArgs} args - Arguments to find a LegacyBlob
     * @example
     * // Get one LegacyBlob
     * const legacyBlob = await prisma.legacyBlob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegacyBlobFindUniqueArgs>(args: SelectSubset<T, LegacyBlobFindUniqueArgs<ExtArgs>>): Prisma__LegacyBlobClient<$Result.GetResult<Prisma.$LegacyBlobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LegacyBlob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LegacyBlobFindUniqueOrThrowArgs} args - Arguments to find a LegacyBlob
     * @example
     * // Get one LegacyBlob
     * const legacyBlob = await prisma.legacyBlob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegacyBlobFindUniqueOrThrowArgs>(args: SelectSubset<T, LegacyBlobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegacyBlobClient<$Result.GetResult<Prisma.$LegacyBlobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegacyBlob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyBlobFindFirstArgs} args - Arguments to find a LegacyBlob
     * @example
     * // Get one LegacyBlob
     * const legacyBlob = await prisma.legacyBlob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegacyBlobFindFirstArgs>(args?: SelectSubset<T, LegacyBlobFindFirstArgs<ExtArgs>>): Prisma__LegacyBlobClient<$Result.GetResult<Prisma.$LegacyBlobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegacyBlob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyBlobFindFirstOrThrowArgs} args - Arguments to find a LegacyBlob
     * @example
     * // Get one LegacyBlob
     * const legacyBlob = await prisma.legacyBlob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegacyBlobFindFirstOrThrowArgs>(args?: SelectSubset<T, LegacyBlobFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegacyBlobClient<$Result.GetResult<Prisma.$LegacyBlobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LegacyBlobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyBlobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegacyBlobs
     * const legacyBlobs = await prisma.legacyBlob.findMany()
     * 
     * // Get first 10 LegacyBlobs
     * const legacyBlobs = await prisma.legacyBlob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legacyBlobWithIdOnly = await prisma.legacyBlob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegacyBlobFindManyArgs>(args?: SelectSubset<T, LegacyBlobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegacyBlobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LegacyBlob.
     * @param {LegacyBlobCreateArgs} args - Arguments to create a LegacyBlob.
     * @example
     * // Create one LegacyBlob
     * const LegacyBlob = await prisma.legacyBlob.create({
     *   data: {
     *     // ... data to create a LegacyBlob
     *   }
     * })
     * 
     */
    create<T extends LegacyBlobCreateArgs>(args: SelectSubset<T, LegacyBlobCreateArgs<ExtArgs>>): Prisma__LegacyBlobClient<$Result.GetResult<Prisma.$LegacyBlobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LegacyBlobs.
     * @param {LegacyBlobCreateManyArgs} args - Arguments to create many LegacyBlobs.
     * @example
     * // Create many LegacyBlobs
     * const legacyBlob = await prisma.legacyBlob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegacyBlobCreateManyArgs>(args?: SelectSubset<T, LegacyBlobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LegacyBlobs and returns the data saved in the database.
     * @param {LegacyBlobCreateManyAndReturnArgs} args - Arguments to create many LegacyBlobs.
     * @example
     * // Create many LegacyBlobs
     * const legacyBlob = await prisma.legacyBlob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LegacyBlobs and only return the `id`
     * const legacyBlobWithIdOnly = await prisma.legacyBlob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LegacyBlobCreateManyAndReturnArgs>(args?: SelectSubset<T, LegacyBlobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegacyBlobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LegacyBlob.
     * @param {LegacyBlobDeleteArgs} args - Arguments to delete one LegacyBlob.
     * @example
     * // Delete one LegacyBlob
     * const LegacyBlob = await prisma.legacyBlob.delete({
     *   where: {
     *     // ... filter to delete one LegacyBlob
     *   }
     * })
     * 
     */
    delete<T extends LegacyBlobDeleteArgs>(args: SelectSubset<T, LegacyBlobDeleteArgs<ExtArgs>>): Prisma__LegacyBlobClient<$Result.GetResult<Prisma.$LegacyBlobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LegacyBlob.
     * @param {LegacyBlobUpdateArgs} args - Arguments to update one LegacyBlob.
     * @example
     * // Update one LegacyBlob
     * const legacyBlob = await prisma.legacyBlob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegacyBlobUpdateArgs>(args: SelectSubset<T, LegacyBlobUpdateArgs<ExtArgs>>): Prisma__LegacyBlobClient<$Result.GetResult<Prisma.$LegacyBlobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LegacyBlobs.
     * @param {LegacyBlobDeleteManyArgs} args - Arguments to filter LegacyBlobs to delete.
     * @example
     * // Delete a few LegacyBlobs
     * const { count } = await prisma.legacyBlob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegacyBlobDeleteManyArgs>(args?: SelectSubset<T, LegacyBlobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegacyBlobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyBlobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegacyBlobs
     * const legacyBlob = await prisma.legacyBlob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegacyBlobUpdateManyArgs>(args: SelectSubset<T, LegacyBlobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegacyBlobs and returns the data updated in the database.
     * @param {LegacyBlobUpdateManyAndReturnArgs} args - Arguments to update many LegacyBlobs.
     * @example
     * // Update many LegacyBlobs
     * const legacyBlob = await prisma.legacyBlob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LegacyBlobs and only return the `id`
     * const legacyBlobWithIdOnly = await prisma.legacyBlob.updateManyAndReturn({
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
    updateManyAndReturn<T extends LegacyBlobUpdateManyAndReturnArgs>(args: SelectSubset<T, LegacyBlobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegacyBlobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LegacyBlob.
     * @param {LegacyBlobUpsertArgs} args - Arguments to update or create a LegacyBlob.
     * @example
     * // Update or create a LegacyBlob
     * const legacyBlob = await prisma.legacyBlob.upsert({
     *   create: {
     *     // ... data to create a LegacyBlob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegacyBlob we want to update
     *   }
     * })
     */
    upsert<T extends LegacyBlobUpsertArgs>(args: SelectSubset<T, LegacyBlobUpsertArgs<ExtArgs>>): Prisma__LegacyBlobClient<$Result.GetResult<Prisma.$LegacyBlobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LegacyBlobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyBlobCountArgs} args - Arguments to filter LegacyBlobs to count.
     * @example
     * // Count the number of LegacyBlobs
     * const count = await prisma.legacyBlob.count({
     *   where: {
     *     // ... the filter for the LegacyBlobs we want to count
     *   }
     * })
    **/
    count<T extends LegacyBlobCountArgs>(
      args?: Subset<T, LegacyBlobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegacyBlobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegacyBlob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyBlobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LegacyBlobAggregateArgs>(args: Subset<T, LegacyBlobAggregateArgs>): Prisma.PrismaPromise<GetLegacyBlobAggregateType<T>>

    /**
     * Group by LegacyBlob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyBlobGroupByArgs} args - Group by arguments.
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
      T extends LegacyBlobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegacyBlobGroupByArgs['orderBy'] }
        : { orderBy?: LegacyBlobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LegacyBlobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegacyBlobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegacyBlob model
   */
  readonly fields: LegacyBlobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegacyBlob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegacyBlobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends FormSubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormSubmissionDefaultArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LegacyBlob model
   */
  interface LegacyBlobFieldRefs {
    readonly id: FieldRef<"LegacyBlob", 'String'>
    readonly submissionId: FieldRef<"LegacyBlob", 'String'>
    readonly photoProofData: FieldRef<"LegacyBlob", 'String'>
    readonly idProofData: FieldRef<"LegacyBlob", 'String'>
    readonly idProofBackData: FieldRef<"LegacyBlob", 'String'>
    readonly createdAt: FieldRef<"LegacyBlob", 'DateTime'>
    readonly updatedAt: FieldRef<"LegacyBlob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LegacyBlob findUnique
   */
  export type LegacyBlobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyBlob
     */
    select?: LegacyBlobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyBlob
     */
    omit?: LegacyBlobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyBlobInclude<ExtArgs> | null
    /**
     * Filter, which LegacyBlob to fetch.
     */
    where: LegacyBlobWhereUniqueInput
  }

  /**
   * LegacyBlob findUniqueOrThrow
   */
  export type LegacyBlobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyBlob
     */
    select?: LegacyBlobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyBlob
     */
    omit?: LegacyBlobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyBlobInclude<ExtArgs> | null
    /**
     * Filter, which LegacyBlob to fetch.
     */
    where: LegacyBlobWhereUniqueInput
  }

  /**
   * LegacyBlob findFirst
   */
  export type LegacyBlobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyBlob
     */
    select?: LegacyBlobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyBlob
     */
    omit?: LegacyBlobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyBlobInclude<ExtArgs> | null
    /**
     * Filter, which LegacyBlob to fetch.
     */
    where?: LegacyBlobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyBlobs to fetch.
     */
    orderBy?: LegacyBlobOrderByWithRelationInput | LegacyBlobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegacyBlobs.
     */
    cursor?: LegacyBlobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyBlobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyBlobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegacyBlobs.
     */
    distinct?: LegacyBlobScalarFieldEnum | LegacyBlobScalarFieldEnum[]
  }

  /**
   * LegacyBlob findFirstOrThrow
   */
  export type LegacyBlobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyBlob
     */
    select?: LegacyBlobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyBlob
     */
    omit?: LegacyBlobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyBlobInclude<ExtArgs> | null
    /**
     * Filter, which LegacyBlob to fetch.
     */
    where?: LegacyBlobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyBlobs to fetch.
     */
    orderBy?: LegacyBlobOrderByWithRelationInput | LegacyBlobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegacyBlobs.
     */
    cursor?: LegacyBlobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyBlobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyBlobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegacyBlobs.
     */
    distinct?: LegacyBlobScalarFieldEnum | LegacyBlobScalarFieldEnum[]
  }

  /**
   * LegacyBlob findMany
   */
  export type LegacyBlobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyBlob
     */
    select?: LegacyBlobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyBlob
     */
    omit?: LegacyBlobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyBlobInclude<ExtArgs> | null
    /**
     * Filter, which LegacyBlobs to fetch.
     */
    where?: LegacyBlobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyBlobs to fetch.
     */
    orderBy?: LegacyBlobOrderByWithRelationInput | LegacyBlobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegacyBlobs.
     */
    cursor?: LegacyBlobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyBlobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyBlobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegacyBlobs.
     */
    distinct?: LegacyBlobScalarFieldEnum | LegacyBlobScalarFieldEnum[]
  }

  /**
   * LegacyBlob create
   */
  export type LegacyBlobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyBlob
     */
    select?: LegacyBlobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyBlob
     */
    omit?: LegacyBlobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyBlobInclude<ExtArgs> | null
    /**
     * The data needed to create a LegacyBlob.
     */
    data: XOR<LegacyBlobCreateInput, LegacyBlobUncheckedCreateInput>
  }

  /**
   * LegacyBlob createMany
   */
  export type LegacyBlobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegacyBlobs.
     */
    data: LegacyBlobCreateManyInput | LegacyBlobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LegacyBlob createManyAndReturn
   */
  export type LegacyBlobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyBlob
     */
    select?: LegacyBlobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyBlob
     */
    omit?: LegacyBlobOmit<ExtArgs> | null
    /**
     * The data used to create many LegacyBlobs.
     */
    data: LegacyBlobCreateManyInput | LegacyBlobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyBlobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LegacyBlob update
   */
  export type LegacyBlobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyBlob
     */
    select?: LegacyBlobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyBlob
     */
    omit?: LegacyBlobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyBlobInclude<ExtArgs> | null
    /**
     * The data needed to update a LegacyBlob.
     */
    data: XOR<LegacyBlobUpdateInput, LegacyBlobUncheckedUpdateInput>
    /**
     * Choose, which LegacyBlob to update.
     */
    where: LegacyBlobWhereUniqueInput
  }

  /**
   * LegacyBlob updateMany
   */
  export type LegacyBlobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegacyBlobs.
     */
    data: XOR<LegacyBlobUpdateManyMutationInput, LegacyBlobUncheckedUpdateManyInput>
    /**
     * Filter which LegacyBlobs to update
     */
    where?: LegacyBlobWhereInput
    /**
     * Limit how many LegacyBlobs to update.
     */
    limit?: number
  }

  /**
   * LegacyBlob updateManyAndReturn
   */
  export type LegacyBlobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyBlob
     */
    select?: LegacyBlobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyBlob
     */
    omit?: LegacyBlobOmit<ExtArgs> | null
    /**
     * The data used to update LegacyBlobs.
     */
    data: XOR<LegacyBlobUpdateManyMutationInput, LegacyBlobUncheckedUpdateManyInput>
    /**
     * Filter which LegacyBlobs to update
     */
    where?: LegacyBlobWhereInput
    /**
     * Limit how many LegacyBlobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyBlobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LegacyBlob upsert
   */
  export type LegacyBlobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyBlob
     */
    select?: LegacyBlobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyBlob
     */
    omit?: LegacyBlobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyBlobInclude<ExtArgs> | null
    /**
     * The filter to search for the LegacyBlob to update in case it exists.
     */
    where: LegacyBlobWhereUniqueInput
    /**
     * In case the LegacyBlob found by the `where` argument doesn't exist, create a new LegacyBlob with this data.
     */
    create: XOR<LegacyBlobCreateInput, LegacyBlobUncheckedCreateInput>
    /**
     * In case the LegacyBlob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegacyBlobUpdateInput, LegacyBlobUncheckedUpdateInput>
  }

  /**
   * LegacyBlob delete
   */
  export type LegacyBlobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyBlob
     */
    select?: LegacyBlobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyBlob
     */
    omit?: LegacyBlobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyBlobInclude<ExtArgs> | null
    /**
     * Filter which LegacyBlob to delete.
     */
    where: LegacyBlobWhereUniqueInput
  }

  /**
   * LegacyBlob deleteMany
   */
  export type LegacyBlobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegacyBlobs to delete
     */
    where?: LegacyBlobWhereInput
    /**
     * Limit how many LegacyBlobs to delete.
     */
    limit?: number
  }

  /**
   * LegacyBlob without action
   */
  export type LegacyBlobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyBlob
     */
    select?: LegacyBlobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegacyBlob
     */
    omit?: LegacyBlobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyBlobInclude<ExtArgs> | null
  }


  /**
   * Model PassportCounter
   */

  export type AggregatePassportCounter = {
    _count: PassportCounterCountAggregateOutputType | null
    _avg: PassportCounterAvgAggregateOutputType | null
    _sum: PassportCounterSumAggregateOutputType | null
    _min: PassportCounterMinAggregateOutputType | null
    _max: PassportCounterMaxAggregateOutputType | null
  }

  export type PassportCounterAvgAggregateOutputType = {
    lastIssued: number | null
  }

  export type PassportCounterSumAggregateOutputType = {
    lastIssued: bigint | null
  }

  export type PassportCounterMinAggregateOutputType = {
    key: string | null
    lastIssued: bigint | null
    updatedAt: Date | null
  }

  export type PassportCounterMaxAggregateOutputType = {
    key: string | null
    lastIssued: bigint | null
    updatedAt: Date | null
  }

  export type PassportCounterCountAggregateOutputType = {
    key: number
    lastIssued: number
    updatedAt: number
    _all: number
  }


  export type PassportCounterAvgAggregateInputType = {
    lastIssued?: true
  }

  export type PassportCounterSumAggregateInputType = {
    lastIssued?: true
  }

  export type PassportCounterMinAggregateInputType = {
    key?: true
    lastIssued?: true
    updatedAt?: true
  }

  export type PassportCounterMaxAggregateInputType = {
    key?: true
    lastIssued?: true
    updatedAt?: true
  }

  export type PassportCounterCountAggregateInputType = {
    key?: true
    lastIssued?: true
    updatedAt?: true
    _all?: true
  }

  export type PassportCounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PassportCounter to aggregate.
     */
    where?: PassportCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassportCounters to fetch.
     */
    orderBy?: PassportCounterOrderByWithRelationInput | PassportCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassportCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassportCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassportCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PassportCounters
    **/
    _count?: true | PassportCounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PassportCounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PassportCounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassportCounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassportCounterMaxAggregateInputType
  }

  export type GetPassportCounterAggregateType<T extends PassportCounterAggregateArgs> = {
        [P in keyof T & keyof AggregatePassportCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassportCounter[P]>
      : GetScalarType<T[P], AggregatePassportCounter[P]>
  }




  export type PassportCounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassportCounterWhereInput
    orderBy?: PassportCounterOrderByWithAggregationInput | PassportCounterOrderByWithAggregationInput[]
    by: PassportCounterScalarFieldEnum[] | PassportCounterScalarFieldEnum
    having?: PassportCounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassportCounterCountAggregateInputType | true
    _avg?: PassportCounterAvgAggregateInputType
    _sum?: PassportCounterSumAggregateInputType
    _min?: PassportCounterMinAggregateInputType
    _max?: PassportCounterMaxAggregateInputType
  }

  export type PassportCounterGroupByOutputType = {
    key: string
    lastIssued: bigint
    updatedAt: Date
    _count: PassportCounterCountAggregateOutputType | null
    _avg: PassportCounterAvgAggregateOutputType | null
    _sum: PassportCounterSumAggregateOutputType | null
    _min: PassportCounterMinAggregateOutputType | null
    _max: PassportCounterMaxAggregateOutputType | null
  }

  type GetPassportCounterGroupByPayload<T extends PassportCounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassportCounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassportCounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassportCounterGroupByOutputType[P]>
            : GetScalarType<T[P], PassportCounterGroupByOutputType[P]>
        }
      >
    >


  export type PassportCounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    lastIssued?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["passportCounter"]>

  export type PassportCounterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    lastIssued?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["passportCounter"]>

  export type PassportCounterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    lastIssued?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["passportCounter"]>

  export type PassportCounterSelectScalar = {
    key?: boolean
    lastIssued?: boolean
    updatedAt?: boolean
  }

  export type PassportCounterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "lastIssued" | "updatedAt", ExtArgs["result"]["passportCounter"]>

  export type $PassportCounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PassportCounter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      lastIssued: bigint
      updatedAt: Date
    }, ExtArgs["result"]["passportCounter"]>
    composites: {}
  }

  type PassportCounterGetPayload<S extends boolean | null | undefined | PassportCounterDefaultArgs> = $Result.GetResult<Prisma.$PassportCounterPayload, S>

  type PassportCounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PassportCounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PassportCounterCountAggregateInputType | true
    }

  export interface PassportCounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PassportCounter'], meta: { name: 'PassportCounter' } }
    /**
     * Find zero or one PassportCounter that matches the filter.
     * @param {PassportCounterFindUniqueArgs} args - Arguments to find a PassportCounter
     * @example
     * // Get one PassportCounter
     * const passportCounter = await prisma.passportCounter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PassportCounterFindUniqueArgs>(args: SelectSubset<T, PassportCounterFindUniqueArgs<ExtArgs>>): Prisma__PassportCounterClient<$Result.GetResult<Prisma.$PassportCounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PassportCounter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PassportCounterFindUniqueOrThrowArgs} args - Arguments to find a PassportCounter
     * @example
     * // Get one PassportCounter
     * const passportCounter = await prisma.passportCounter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PassportCounterFindUniqueOrThrowArgs>(args: SelectSubset<T, PassportCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PassportCounterClient<$Result.GetResult<Prisma.$PassportCounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PassportCounter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportCounterFindFirstArgs} args - Arguments to find a PassportCounter
     * @example
     * // Get one PassportCounter
     * const passportCounter = await prisma.passportCounter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PassportCounterFindFirstArgs>(args?: SelectSubset<T, PassportCounterFindFirstArgs<ExtArgs>>): Prisma__PassportCounterClient<$Result.GetResult<Prisma.$PassportCounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PassportCounter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportCounterFindFirstOrThrowArgs} args - Arguments to find a PassportCounter
     * @example
     * // Get one PassportCounter
     * const passportCounter = await prisma.passportCounter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PassportCounterFindFirstOrThrowArgs>(args?: SelectSubset<T, PassportCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__PassportCounterClient<$Result.GetResult<Prisma.$PassportCounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PassportCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportCounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PassportCounters
     * const passportCounters = await prisma.passportCounter.findMany()
     * 
     * // Get first 10 PassportCounters
     * const passportCounters = await prisma.passportCounter.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const passportCounterWithKeyOnly = await prisma.passportCounter.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends PassportCounterFindManyArgs>(args?: SelectSubset<T, PassportCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassportCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PassportCounter.
     * @param {PassportCounterCreateArgs} args - Arguments to create a PassportCounter.
     * @example
     * // Create one PassportCounter
     * const PassportCounter = await prisma.passportCounter.create({
     *   data: {
     *     // ... data to create a PassportCounter
     *   }
     * })
     * 
     */
    create<T extends PassportCounterCreateArgs>(args: SelectSubset<T, PassportCounterCreateArgs<ExtArgs>>): Prisma__PassportCounterClient<$Result.GetResult<Prisma.$PassportCounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PassportCounters.
     * @param {PassportCounterCreateManyArgs} args - Arguments to create many PassportCounters.
     * @example
     * // Create many PassportCounters
     * const passportCounter = await prisma.passportCounter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PassportCounterCreateManyArgs>(args?: SelectSubset<T, PassportCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PassportCounters and returns the data saved in the database.
     * @param {PassportCounterCreateManyAndReturnArgs} args - Arguments to create many PassportCounters.
     * @example
     * // Create many PassportCounters
     * const passportCounter = await prisma.passportCounter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PassportCounters and only return the `key`
     * const passportCounterWithKeyOnly = await prisma.passportCounter.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PassportCounterCreateManyAndReturnArgs>(args?: SelectSubset<T, PassportCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassportCounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PassportCounter.
     * @param {PassportCounterDeleteArgs} args - Arguments to delete one PassportCounter.
     * @example
     * // Delete one PassportCounter
     * const PassportCounter = await prisma.passportCounter.delete({
     *   where: {
     *     // ... filter to delete one PassportCounter
     *   }
     * })
     * 
     */
    delete<T extends PassportCounterDeleteArgs>(args: SelectSubset<T, PassportCounterDeleteArgs<ExtArgs>>): Prisma__PassportCounterClient<$Result.GetResult<Prisma.$PassportCounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PassportCounter.
     * @param {PassportCounterUpdateArgs} args - Arguments to update one PassportCounter.
     * @example
     * // Update one PassportCounter
     * const passportCounter = await prisma.passportCounter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PassportCounterUpdateArgs>(args: SelectSubset<T, PassportCounterUpdateArgs<ExtArgs>>): Prisma__PassportCounterClient<$Result.GetResult<Prisma.$PassportCounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PassportCounters.
     * @param {PassportCounterDeleteManyArgs} args - Arguments to filter PassportCounters to delete.
     * @example
     * // Delete a few PassportCounters
     * const { count } = await prisma.passportCounter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PassportCounterDeleteManyArgs>(args?: SelectSubset<T, PassportCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PassportCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportCounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PassportCounters
     * const passportCounter = await prisma.passportCounter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PassportCounterUpdateManyArgs>(args: SelectSubset<T, PassportCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PassportCounters and returns the data updated in the database.
     * @param {PassportCounterUpdateManyAndReturnArgs} args - Arguments to update many PassportCounters.
     * @example
     * // Update many PassportCounters
     * const passportCounter = await prisma.passportCounter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PassportCounters and only return the `key`
     * const passportCounterWithKeyOnly = await prisma.passportCounter.updateManyAndReturn({
     *   select: { key: true },
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
    updateManyAndReturn<T extends PassportCounterUpdateManyAndReturnArgs>(args: SelectSubset<T, PassportCounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassportCounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PassportCounter.
     * @param {PassportCounterUpsertArgs} args - Arguments to update or create a PassportCounter.
     * @example
     * // Update or create a PassportCounter
     * const passportCounter = await prisma.passportCounter.upsert({
     *   create: {
     *     // ... data to create a PassportCounter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PassportCounter we want to update
     *   }
     * })
     */
    upsert<T extends PassportCounterUpsertArgs>(args: SelectSubset<T, PassportCounterUpsertArgs<ExtArgs>>): Prisma__PassportCounterClient<$Result.GetResult<Prisma.$PassportCounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PassportCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportCounterCountArgs} args - Arguments to filter PassportCounters to count.
     * @example
     * // Count the number of PassportCounters
     * const count = await prisma.passportCounter.count({
     *   where: {
     *     // ... the filter for the PassportCounters we want to count
     *   }
     * })
    **/
    count<T extends PassportCounterCountArgs>(
      args?: Subset<T, PassportCounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassportCounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PassportCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportCounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PassportCounterAggregateArgs>(args: Subset<T, PassportCounterAggregateArgs>): Prisma.PrismaPromise<GetPassportCounterAggregateType<T>>

    /**
     * Group by PassportCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportCounterGroupByArgs} args - Group by arguments.
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
      T extends PassportCounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassportCounterGroupByArgs['orderBy'] }
        : { orderBy?: PassportCounterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PassportCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassportCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PassportCounter model
   */
  readonly fields: PassportCounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PassportCounter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassportCounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PassportCounter model
   */
  interface PassportCounterFieldRefs {
    readonly key: FieldRef<"PassportCounter", 'String'>
    readonly lastIssued: FieldRef<"PassportCounter", 'BigInt'>
    readonly updatedAt: FieldRef<"PassportCounter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PassportCounter findUnique
   */
  export type PassportCounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportCounter
     */
    select?: PassportCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportCounter
     */
    omit?: PassportCounterOmit<ExtArgs> | null
    /**
     * Filter, which PassportCounter to fetch.
     */
    where: PassportCounterWhereUniqueInput
  }

  /**
   * PassportCounter findUniqueOrThrow
   */
  export type PassportCounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportCounter
     */
    select?: PassportCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportCounter
     */
    omit?: PassportCounterOmit<ExtArgs> | null
    /**
     * Filter, which PassportCounter to fetch.
     */
    where: PassportCounterWhereUniqueInput
  }

  /**
   * PassportCounter findFirst
   */
  export type PassportCounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportCounter
     */
    select?: PassportCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportCounter
     */
    omit?: PassportCounterOmit<ExtArgs> | null
    /**
     * Filter, which PassportCounter to fetch.
     */
    where?: PassportCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassportCounters to fetch.
     */
    orderBy?: PassportCounterOrderByWithRelationInput | PassportCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PassportCounters.
     */
    cursor?: PassportCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassportCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassportCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PassportCounters.
     */
    distinct?: PassportCounterScalarFieldEnum | PassportCounterScalarFieldEnum[]
  }

  /**
   * PassportCounter findFirstOrThrow
   */
  export type PassportCounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportCounter
     */
    select?: PassportCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportCounter
     */
    omit?: PassportCounterOmit<ExtArgs> | null
    /**
     * Filter, which PassportCounter to fetch.
     */
    where?: PassportCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassportCounters to fetch.
     */
    orderBy?: PassportCounterOrderByWithRelationInput | PassportCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PassportCounters.
     */
    cursor?: PassportCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassportCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassportCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PassportCounters.
     */
    distinct?: PassportCounterScalarFieldEnum | PassportCounterScalarFieldEnum[]
  }

  /**
   * PassportCounter findMany
   */
  export type PassportCounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportCounter
     */
    select?: PassportCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportCounter
     */
    omit?: PassportCounterOmit<ExtArgs> | null
    /**
     * Filter, which PassportCounters to fetch.
     */
    where?: PassportCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassportCounters to fetch.
     */
    orderBy?: PassportCounterOrderByWithRelationInput | PassportCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PassportCounters.
     */
    cursor?: PassportCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassportCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassportCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PassportCounters.
     */
    distinct?: PassportCounterScalarFieldEnum | PassportCounterScalarFieldEnum[]
  }

  /**
   * PassportCounter create
   */
  export type PassportCounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportCounter
     */
    select?: PassportCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportCounter
     */
    omit?: PassportCounterOmit<ExtArgs> | null
    /**
     * The data needed to create a PassportCounter.
     */
    data: XOR<PassportCounterCreateInput, PassportCounterUncheckedCreateInput>
  }

  /**
   * PassportCounter createMany
   */
  export type PassportCounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PassportCounters.
     */
    data: PassportCounterCreateManyInput | PassportCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PassportCounter createManyAndReturn
   */
  export type PassportCounterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportCounter
     */
    select?: PassportCounterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PassportCounter
     */
    omit?: PassportCounterOmit<ExtArgs> | null
    /**
     * The data used to create many PassportCounters.
     */
    data: PassportCounterCreateManyInput | PassportCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PassportCounter update
   */
  export type PassportCounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportCounter
     */
    select?: PassportCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportCounter
     */
    omit?: PassportCounterOmit<ExtArgs> | null
    /**
     * The data needed to update a PassportCounter.
     */
    data: XOR<PassportCounterUpdateInput, PassportCounterUncheckedUpdateInput>
    /**
     * Choose, which PassportCounter to update.
     */
    where: PassportCounterWhereUniqueInput
  }

  /**
   * PassportCounter updateMany
   */
  export type PassportCounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PassportCounters.
     */
    data: XOR<PassportCounterUpdateManyMutationInput, PassportCounterUncheckedUpdateManyInput>
    /**
     * Filter which PassportCounters to update
     */
    where?: PassportCounterWhereInput
    /**
     * Limit how many PassportCounters to update.
     */
    limit?: number
  }

  /**
   * PassportCounter updateManyAndReturn
   */
  export type PassportCounterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportCounter
     */
    select?: PassportCounterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PassportCounter
     */
    omit?: PassportCounterOmit<ExtArgs> | null
    /**
     * The data used to update PassportCounters.
     */
    data: XOR<PassportCounterUpdateManyMutationInput, PassportCounterUncheckedUpdateManyInput>
    /**
     * Filter which PassportCounters to update
     */
    where?: PassportCounterWhereInput
    /**
     * Limit how many PassportCounters to update.
     */
    limit?: number
  }

  /**
   * PassportCounter upsert
   */
  export type PassportCounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportCounter
     */
    select?: PassportCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportCounter
     */
    omit?: PassportCounterOmit<ExtArgs> | null
    /**
     * The filter to search for the PassportCounter to update in case it exists.
     */
    where: PassportCounterWhereUniqueInput
    /**
     * In case the PassportCounter found by the `where` argument doesn't exist, create a new PassportCounter with this data.
     */
    create: XOR<PassportCounterCreateInput, PassportCounterUncheckedCreateInput>
    /**
     * In case the PassportCounter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassportCounterUpdateInput, PassportCounterUncheckedUpdateInput>
  }

  /**
   * PassportCounter delete
   */
  export type PassportCounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportCounter
     */
    select?: PassportCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportCounter
     */
    omit?: PassportCounterOmit<ExtArgs> | null
    /**
     * Filter which PassportCounter to delete.
     */
    where: PassportCounterWhereUniqueInput
  }

  /**
   * PassportCounter deleteMany
   */
  export type PassportCounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PassportCounters to delete
     */
    where?: PassportCounterWhereInput
    /**
     * Limit how many PassportCounters to delete.
     */
    limit?: number
  }

  /**
   * PassportCounter without action
   */
  export type PassportCounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportCounter
     */
    select?: PassportCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportCounter
     */
    omit?: PassportCounterOmit<ExtArgs> | null
  }


  /**
   * Model SalesOfficer
   */

  export type AggregateSalesOfficer = {
    _count: SalesOfficerCountAggregateOutputType | null
    _min: SalesOfficerMinAggregateOutputType | null
    _max: SalesOfficerMaxAggregateOutputType | null
  }

  export type SalesOfficerMinAggregateOutputType = {
    id: string | null
    name: string | null
    nameNormalized: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesOfficerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    nameNormalized: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesOfficerCountAggregateOutputType = {
    id: number
    name: number
    nameNormalized: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalesOfficerMinAggregateInputType = {
    id?: true
    name?: true
    nameNormalized?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesOfficerMaxAggregateInputType = {
    id?: true
    name?: true
    nameNormalized?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesOfficerCountAggregateInputType = {
    id?: true
    name?: true
    nameNormalized?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalesOfficerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOfficer to aggregate.
     */
    where?: SalesOfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOfficers to fetch.
     */
    orderBy?: SalesOfficerOrderByWithRelationInput | SalesOfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesOfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOfficers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOfficers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesOfficers
    **/
    _count?: true | SalesOfficerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesOfficerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesOfficerMaxAggregateInputType
  }

  export type GetSalesOfficerAggregateType<T extends SalesOfficerAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesOfficer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesOfficer[P]>
      : GetScalarType<T[P], AggregateSalesOfficer[P]>
  }




  export type SalesOfficerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOfficerWhereInput
    orderBy?: SalesOfficerOrderByWithAggregationInput | SalesOfficerOrderByWithAggregationInput[]
    by: SalesOfficerScalarFieldEnum[] | SalesOfficerScalarFieldEnum
    having?: SalesOfficerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesOfficerCountAggregateInputType | true
    _min?: SalesOfficerMinAggregateInputType
    _max?: SalesOfficerMaxAggregateInputType
  }

  export type SalesOfficerGroupByOutputType = {
    id: string
    name: string
    nameNormalized: string
    createdAt: Date
    updatedAt: Date
    _count: SalesOfficerCountAggregateOutputType | null
    _min: SalesOfficerMinAggregateOutputType | null
    _max: SalesOfficerMaxAggregateOutputType | null
  }

  type GetSalesOfficerGroupByPayload<T extends SalesOfficerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesOfficerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesOfficerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesOfficerGroupByOutputType[P]>
            : GetScalarType<T[P], SalesOfficerGroupByOutputType[P]>
        }
      >
    >


  export type SalesOfficerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameNormalized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salesOfficer"]>

  export type SalesOfficerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameNormalized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salesOfficer"]>

  export type SalesOfficerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameNormalized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salesOfficer"]>

  export type SalesOfficerSelectScalar = {
    id?: boolean
    name?: boolean
    nameNormalized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalesOfficerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nameNormalized" | "createdAt" | "updatedAt", ExtArgs["result"]["salesOfficer"]>

  export type $SalesOfficerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesOfficer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      nameNormalized: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salesOfficer"]>
    composites: {}
  }

  type SalesOfficerGetPayload<S extends boolean | null | undefined | SalesOfficerDefaultArgs> = $Result.GetResult<Prisma.$SalesOfficerPayload, S>

  type SalesOfficerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesOfficerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesOfficerCountAggregateInputType | true
    }

  export interface SalesOfficerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesOfficer'], meta: { name: 'SalesOfficer' } }
    /**
     * Find zero or one SalesOfficer that matches the filter.
     * @param {SalesOfficerFindUniqueArgs} args - Arguments to find a SalesOfficer
     * @example
     * // Get one SalesOfficer
     * const salesOfficer = await prisma.salesOfficer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesOfficerFindUniqueArgs>(args: SelectSubset<T, SalesOfficerFindUniqueArgs<ExtArgs>>): Prisma__SalesOfficerClient<$Result.GetResult<Prisma.$SalesOfficerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalesOfficer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesOfficerFindUniqueOrThrowArgs} args - Arguments to find a SalesOfficer
     * @example
     * // Get one SalesOfficer
     * const salesOfficer = await prisma.salesOfficer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesOfficerFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesOfficerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesOfficerClient<$Result.GetResult<Prisma.$SalesOfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOfficer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOfficerFindFirstArgs} args - Arguments to find a SalesOfficer
     * @example
     * // Get one SalesOfficer
     * const salesOfficer = await prisma.salesOfficer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesOfficerFindFirstArgs>(args?: SelectSubset<T, SalesOfficerFindFirstArgs<ExtArgs>>): Prisma__SalesOfficerClient<$Result.GetResult<Prisma.$SalesOfficerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOfficer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOfficerFindFirstOrThrowArgs} args - Arguments to find a SalesOfficer
     * @example
     * // Get one SalesOfficer
     * const salesOfficer = await prisma.salesOfficer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesOfficerFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesOfficerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesOfficerClient<$Result.GetResult<Prisma.$SalesOfficerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesOfficers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOfficerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesOfficers
     * const salesOfficers = await prisma.salesOfficer.findMany()
     * 
     * // Get first 10 SalesOfficers
     * const salesOfficers = await prisma.salesOfficer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesOfficerWithIdOnly = await prisma.salesOfficer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesOfficerFindManyArgs>(args?: SelectSubset<T, SalesOfficerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOfficerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalesOfficer.
     * @param {SalesOfficerCreateArgs} args - Arguments to create a SalesOfficer.
     * @example
     * // Create one SalesOfficer
     * const SalesOfficer = await prisma.salesOfficer.create({
     *   data: {
     *     // ... data to create a SalesOfficer
     *   }
     * })
     * 
     */
    create<T extends SalesOfficerCreateArgs>(args: SelectSubset<T, SalesOfficerCreateArgs<ExtArgs>>): Prisma__SalesOfficerClient<$Result.GetResult<Prisma.$SalesOfficerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalesOfficers.
     * @param {SalesOfficerCreateManyArgs} args - Arguments to create many SalesOfficers.
     * @example
     * // Create many SalesOfficers
     * const salesOfficer = await prisma.salesOfficer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesOfficerCreateManyArgs>(args?: SelectSubset<T, SalesOfficerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesOfficers and returns the data saved in the database.
     * @param {SalesOfficerCreateManyAndReturnArgs} args - Arguments to create many SalesOfficers.
     * @example
     * // Create many SalesOfficers
     * const salesOfficer = await prisma.salesOfficer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesOfficers and only return the `id`
     * const salesOfficerWithIdOnly = await prisma.salesOfficer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesOfficerCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesOfficerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOfficerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalesOfficer.
     * @param {SalesOfficerDeleteArgs} args - Arguments to delete one SalesOfficer.
     * @example
     * // Delete one SalesOfficer
     * const SalesOfficer = await prisma.salesOfficer.delete({
     *   where: {
     *     // ... filter to delete one SalesOfficer
     *   }
     * })
     * 
     */
    delete<T extends SalesOfficerDeleteArgs>(args: SelectSubset<T, SalesOfficerDeleteArgs<ExtArgs>>): Prisma__SalesOfficerClient<$Result.GetResult<Prisma.$SalesOfficerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalesOfficer.
     * @param {SalesOfficerUpdateArgs} args - Arguments to update one SalesOfficer.
     * @example
     * // Update one SalesOfficer
     * const salesOfficer = await prisma.salesOfficer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesOfficerUpdateArgs>(args: SelectSubset<T, SalesOfficerUpdateArgs<ExtArgs>>): Prisma__SalesOfficerClient<$Result.GetResult<Prisma.$SalesOfficerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalesOfficers.
     * @param {SalesOfficerDeleteManyArgs} args - Arguments to filter SalesOfficers to delete.
     * @example
     * // Delete a few SalesOfficers
     * const { count } = await prisma.salesOfficer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesOfficerDeleteManyArgs>(args?: SelectSubset<T, SalesOfficerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOfficers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOfficerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesOfficers
     * const salesOfficer = await prisma.salesOfficer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesOfficerUpdateManyArgs>(args: SelectSubset<T, SalesOfficerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOfficers and returns the data updated in the database.
     * @param {SalesOfficerUpdateManyAndReturnArgs} args - Arguments to update many SalesOfficers.
     * @example
     * // Update many SalesOfficers
     * const salesOfficer = await prisma.salesOfficer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalesOfficers and only return the `id`
     * const salesOfficerWithIdOnly = await prisma.salesOfficer.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalesOfficerUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesOfficerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOfficerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalesOfficer.
     * @param {SalesOfficerUpsertArgs} args - Arguments to update or create a SalesOfficer.
     * @example
     * // Update or create a SalesOfficer
     * const salesOfficer = await prisma.salesOfficer.upsert({
     *   create: {
     *     // ... data to create a SalesOfficer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesOfficer we want to update
     *   }
     * })
     */
    upsert<T extends SalesOfficerUpsertArgs>(args: SelectSubset<T, SalesOfficerUpsertArgs<ExtArgs>>): Prisma__SalesOfficerClient<$Result.GetResult<Prisma.$SalesOfficerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalesOfficers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOfficerCountArgs} args - Arguments to filter SalesOfficers to count.
     * @example
     * // Count the number of SalesOfficers
     * const count = await prisma.salesOfficer.count({
     *   where: {
     *     // ... the filter for the SalesOfficers we want to count
     *   }
     * })
    **/
    count<T extends SalesOfficerCountArgs>(
      args?: Subset<T, SalesOfficerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesOfficerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesOfficer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOfficerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesOfficerAggregateArgs>(args: Subset<T, SalesOfficerAggregateArgs>): Prisma.PrismaPromise<GetSalesOfficerAggregateType<T>>

    /**
     * Group by SalesOfficer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOfficerGroupByArgs} args - Group by arguments.
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
      T extends SalesOfficerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesOfficerGroupByArgs['orderBy'] }
        : { orderBy?: SalesOfficerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalesOfficerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesOfficerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesOfficer model
   */
  readonly fields: SalesOfficerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesOfficer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesOfficerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SalesOfficer model
   */
  interface SalesOfficerFieldRefs {
    readonly id: FieldRef<"SalesOfficer", 'String'>
    readonly name: FieldRef<"SalesOfficer", 'String'>
    readonly nameNormalized: FieldRef<"SalesOfficer", 'String'>
    readonly createdAt: FieldRef<"SalesOfficer", 'DateTime'>
    readonly updatedAt: FieldRef<"SalesOfficer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesOfficer findUnique
   */
  export type SalesOfficerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOfficer
     */
    select?: SalesOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOfficer
     */
    omit?: SalesOfficerOmit<ExtArgs> | null
    /**
     * Filter, which SalesOfficer to fetch.
     */
    where: SalesOfficerWhereUniqueInput
  }

  /**
   * SalesOfficer findUniqueOrThrow
   */
  export type SalesOfficerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOfficer
     */
    select?: SalesOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOfficer
     */
    omit?: SalesOfficerOmit<ExtArgs> | null
    /**
     * Filter, which SalesOfficer to fetch.
     */
    where: SalesOfficerWhereUniqueInput
  }

  /**
   * SalesOfficer findFirst
   */
  export type SalesOfficerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOfficer
     */
    select?: SalesOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOfficer
     */
    omit?: SalesOfficerOmit<ExtArgs> | null
    /**
     * Filter, which SalesOfficer to fetch.
     */
    where?: SalesOfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOfficers to fetch.
     */
    orderBy?: SalesOfficerOrderByWithRelationInput | SalesOfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOfficers.
     */
    cursor?: SalesOfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOfficers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOfficers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOfficers.
     */
    distinct?: SalesOfficerScalarFieldEnum | SalesOfficerScalarFieldEnum[]
  }

  /**
   * SalesOfficer findFirstOrThrow
   */
  export type SalesOfficerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOfficer
     */
    select?: SalesOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOfficer
     */
    omit?: SalesOfficerOmit<ExtArgs> | null
    /**
     * Filter, which SalesOfficer to fetch.
     */
    where?: SalesOfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOfficers to fetch.
     */
    orderBy?: SalesOfficerOrderByWithRelationInput | SalesOfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOfficers.
     */
    cursor?: SalesOfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOfficers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOfficers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOfficers.
     */
    distinct?: SalesOfficerScalarFieldEnum | SalesOfficerScalarFieldEnum[]
  }

  /**
   * SalesOfficer findMany
   */
  export type SalesOfficerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOfficer
     */
    select?: SalesOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOfficer
     */
    omit?: SalesOfficerOmit<ExtArgs> | null
    /**
     * Filter, which SalesOfficers to fetch.
     */
    where?: SalesOfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOfficers to fetch.
     */
    orderBy?: SalesOfficerOrderByWithRelationInput | SalesOfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesOfficers.
     */
    cursor?: SalesOfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOfficers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOfficers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOfficers.
     */
    distinct?: SalesOfficerScalarFieldEnum | SalesOfficerScalarFieldEnum[]
  }

  /**
   * SalesOfficer create
   */
  export type SalesOfficerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOfficer
     */
    select?: SalesOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOfficer
     */
    omit?: SalesOfficerOmit<ExtArgs> | null
    /**
     * The data needed to create a SalesOfficer.
     */
    data: XOR<SalesOfficerCreateInput, SalesOfficerUncheckedCreateInput>
  }

  /**
   * SalesOfficer createMany
   */
  export type SalesOfficerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesOfficers.
     */
    data: SalesOfficerCreateManyInput | SalesOfficerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesOfficer createManyAndReturn
   */
  export type SalesOfficerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOfficer
     */
    select?: SalesOfficerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOfficer
     */
    omit?: SalesOfficerOmit<ExtArgs> | null
    /**
     * The data used to create many SalesOfficers.
     */
    data: SalesOfficerCreateManyInput | SalesOfficerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesOfficer update
   */
  export type SalesOfficerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOfficer
     */
    select?: SalesOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOfficer
     */
    omit?: SalesOfficerOmit<ExtArgs> | null
    /**
     * The data needed to update a SalesOfficer.
     */
    data: XOR<SalesOfficerUpdateInput, SalesOfficerUncheckedUpdateInput>
    /**
     * Choose, which SalesOfficer to update.
     */
    where: SalesOfficerWhereUniqueInput
  }

  /**
   * SalesOfficer updateMany
   */
  export type SalesOfficerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesOfficers.
     */
    data: XOR<SalesOfficerUpdateManyMutationInput, SalesOfficerUncheckedUpdateManyInput>
    /**
     * Filter which SalesOfficers to update
     */
    where?: SalesOfficerWhereInput
    /**
     * Limit how many SalesOfficers to update.
     */
    limit?: number
  }

  /**
   * SalesOfficer updateManyAndReturn
   */
  export type SalesOfficerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOfficer
     */
    select?: SalesOfficerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOfficer
     */
    omit?: SalesOfficerOmit<ExtArgs> | null
    /**
     * The data used to update SalesOfficers.
     */
    data: XOR<SalesOfficerUpdateManyMutationInput, SalesOfficerUncheckedUpdateManyInput>
    /**
     * Filter which SalesOfficers to update
     */
    where?: SalesOfficerWhereInput
    /**
     * Limit how many SalesOfficers to update.
     */
    limit?: number
  }

  /**
   * SalesOfficer upsert
   */
  export type SalesOfficerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOfficer
     */
    select?: SalesOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOfficer
     */
    omit?: SalesOfficerOmit<ExtArgs> | null
    /**
     * The filter to search for the SalesOfficer to update in case it exists.
     */
    where: SalesOfficerWhereUniqueInput
    /**
     * In case the SalesOfficer found by the `where` argument doesn't exist, create a new SalesOfficer with this data.
     */
    create: XOR<SalesOfficerCreateInput, SalesOfficerUncheckedCreateInput>
    /**
     * In case the SalesOfficer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesOfficerUpdateInput, SalesOfficerUncheckedUpdateInput>
  }

  /**
   * SalesOfficer delete
   */
  export type SalesOfficerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOfficer
     */
    select?: SalesOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOfficer
     */
    omit?: SalesOfficerOmit<ExtArgs> | null
    /**
     * Filter which SalesOfficer to delete.
     */
    where: SalesOfficerWhereUniqueInput
  }

  /**
   * SalesOfficer deleteMany
   */
  export type SalesOfficerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOfficers to delete
     */
    where?: SalesOfficerWhereInput
    /**
     * Limit how many SalesOfficers to delete.
     */
    limit?: number
  }

  /**
   * SalesOfficer without action
   */
  export type SalesOfficerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOfficer
     */
    select?: SalesOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOfficer
     */
    omit?: SalesOfficerOmit<ExtArgs> | null
  }


  /**
   * Model ReportingManager
   */

  export type AggregateReportingManager = {
    _count: ReportingManagerCountAggregateOutputType | null
    _min: ReportingManagerMinAggregateOutputType | null
    _max: ReportingManagerMaxAggregateOutputType | null
  }

  export type ReportingManagerMinAggregateOutputType = {
    id: string | null
    name: string | null
    nameNormalized: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportingManagerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    nameNormalized: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportingManagerCountAggregateOutputType = {
    id: number
    name: number
    nameNormalized: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportingManagerMinAggregateInputType = {
    id?: true
    name?: true
    nameNormalized?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportingManagerMaxAggregateInputType = {
    id?: true
    name?: true
    nameNormalized?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportingManagerCountAggregateInputType = {
    id?: true
    name?: true
    nameNormalized?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportingManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportingManager to aggregate.
     */
    where?: ReportingManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportingManagers to fetch.
     */
    orderBy?: ReportingManagerOrderByWithRelationInput | ReportingManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportingManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportingManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportingManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportingManagers
    **/
    _count?: true | ReportingManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportingManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportingManagerMaxAggregateInputType
  }

  export type GetReportingManagerAggregateType<T extends ReportingManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateReportingManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportingManager[P]>
      : GetScalarType<T[P], AggregateReportingManager[P]>
  }




  export type ReportingManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportingManagerWhereInput
    orderBy?: ReportingManagerOrderByWithAggregationInput | ReportingManagerOrderByWithAggregationInput[]
    by: ReportingManagerScalarFieldEnum[] | ReportingManagerScalarFieldEnum
    having?: ReportingManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportingManagerCountAggregateInputType | true
    _min?: ReportingManagerMinAggregateInputType
    _max?: ReportingManagerMaxAggregateInputType
  }

  export type ReportingManagerGroupByOutputType = {
    id: string
    name: string
    nameNormalized: string
    createdAt: Date
    updatedAt: Date
    _count: ReportingManagerCountAggregateOutputType | null
    _min: ReportingManagerMinAggregateOutputType | null
    _max: ReportingManagerMaxAggregateOutputType | null
  }

  type GetReportingManagerGroupByPayload<T extends ReportingManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportingManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportingManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportingManagerGroupByOutputType[P]>
            : GetScalarType<T[P], ReportingManagerGroupByOutputType[P]>
        }
      >
    >


  export type ReportingManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameNormalized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reportingManager"]>

  export type ReportingManagerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameNormalized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reportingManager"]>

  export type ReportingManagerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameNormalized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reportingManager"]>

  export type ReportingManagerSelectScalar = {
    id?: boolean
    name?: boolean
    nameNormalized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportingManagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nameNormalized" | "createdAt" | "updatedAt", ExtArgs["result"]["reportingManager"]>

  export type $ReportingManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportingManager"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      nameNormalized: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reportingManager"]>
    composites: {}
  }

  type ReportingManagerGetPayload<S extends boolean | null | undefined | ReportingManagerDefaultArgs> = $Result.GetResult<Prisma.$ReportingManagerPayload, S>

  type ReportingManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportingManagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportingManagerCountAggregateInputType | true
    }

  export interface ReportingManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReportingManager'], meta: { name: 'ReportingManager' } }
    /**
     * Find zero or one ReportingManager that matches the filter.
     * @param {ReportingManagerFindUniqueArgs} args - Arguments to find a ReportingManager
     * @example
     * // Get one ReportingManager
     * const reportingManager = await prisma.reportingManager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportingManagerFindUniqueArgs>(args: SelectSubset<T, ReportingManagerFindUniqueArgs<ExtArgs>>): Prisma__ReportingManagerClient<$Result.GetResult<Prisma.$ReportingManagerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReportingManager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportingManagerFindUniqueOrThrowArgs} args - Arguments to find a ReportingManager
     * @example
     * // Get one ReportingManager
     * const reportingManager = await prisma.reportingManager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportingManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportingManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportingManagerClient<$Result.GetResult<Prisma.$ReportingManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportingManager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportingManagerFindFirstArgs} args - Arguments to find a ReportingManager
     * @example
     * // Get one ReportingManager
     * const reportingManager = await prisma.reportingManager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportingManagerFindFirstArgs>(args?: SelectSubset<T, ReportingManagerFindFirstArgs<ExtArgs>>): Prisma__ReportingManagerClient<$Result.GetResult<Prisma.$ReportingManagerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportingManager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportingManagerFindFirstOrThrowArgs} args - Arguments to find a ReportingManager
     * @example
     * // Get one ReportingManager
     * const reportingManager = await prisma.reportingManager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportingManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportingManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportingManagerClient<$Result.GetResult<Prisma.$ReportingManagerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReportingManagers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportingManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportingManagers
     * const reportingManagers = await prisma.reportingManager.findMany()
     * 
     * // Get first 10 ReportingManagers
     * const reportingManagers = await prisma.reportingManager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportingManagerWithIdOnly = await prisma.reportingManager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportingManagerFindManyArgs>(args?: SelectSubset<T, ReportingManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportingManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReportingManager.
     * @param {ReportingManagerCreateArgs} args - Arguments to create a ReportingManager.
     * @example
     * // Create one ReportingManager
     * const ReportingManager = await prisma.reportingManager.create({
     *   data: {
     *     // ... data to create a ReportingManager
     *   }
     * })
     * 
     */
    create<T extends ReportingManagerCreateArgs>(args: SelectSubset<T, ReportingManagerCreateArgs<ExtArgs>>): Prisma__ReportingManagerClient<$Result.GetResult<Prisma.$ReportingManagerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReportingManagers.
     * @param {ReportingManagerCreateManyArgs} args - Arguments to create many ReportingManagers.
     * @example
     * // Create many ReportingManagers
     * const reportingManager = await prisma.reportingManager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportingManagerCreateManyArgs>(args?: SelectSubset<T, ReportingManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReportingManagers and returns the data saved in the database.
     * @param {ReportingManagerCreateManyAndReturnArgs} args - Arguments to create many ReportingManagers.
     * @example
     * // Create many ReportingManagers
     * const reportingManager = await prisma.reportingManager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReportingManagers and only return the `id`
     * const reportingManagerWithIdOnly = await prisma.reportingManager.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportingManagerCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportingManagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportingManagerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReportingManager.
     * @param {ReportingManagerDeleteArgs} args - Arguments to delete one ReportingManager.
     * @example
     * // Delete one ReportingManager
     * const ReportingManager = await prisma.reportingManager.delete({
     *   where: {
     *     // ... filter to delete one ReportingManager
     *   }
     * })
     * 
     */
    delete<T extends ReportingManagerDeleteArgs>(args: SelectSubset<T, ReportingManagerDeleteArgs<ExtArgs>>): Prisma__ReportingManagerClient<$Result.GetResult<Prisma.$ReportingManagerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReportingManager.
     * @param {ReportingManagerUpdateArgs} args - Arguments to update one ReportingManager.
     * @example
     * // Update one ReportingManager
     * const reportingManager = await prisma.reportingManager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportingManagerUpdateArgs>(args: SelectSubset<T, ReportingManagerUpdateArgs<ExtArgs>>): Prisma__ReportingManagerClient<$Result.GetResult<Prisma.$ReportingManagerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReportingManagers.
     * @param {ReportingManagerDeleteManyArgs} args - Arguments to filter ReportingManagers to delete.
     * @example
     * // Delete a few ReportingManagers
     * const { count } = await prisma.reportingManager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportingManagerDeleteManyArgs>(args?: SelectSubset<T, ReportingManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportingManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportingManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportingManagers
     * const reportingManager = await prisma.reportingManager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportingManagerUpdateManyArgs>(args: SelectSubset<T, ReportingManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportingManagers and returns the data updated in the database.
     * @param {ReportingManagerUpdateManyAndReturnArgs} args - Arguments to update many ReportingManagers.
     * @example
     * // Update many ReportingManagers
     * const reportingManager = await prisma.reportingManager.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReportingManagers and only return the `id`
     * const reportingManagerWithIdOnly = await prisma.reportingManager.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportingManagerUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportingManagerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportingManagerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReportingManager.
     * @param {ReportingManagerUpsertArgs} args - Arguments to update or create a ReportingManager.
     * @example
     * // Update or create a ReportingManager
     * const reportingManager = await prisma.reportingManager.upsert({
     *   create: {
     *     // ... data to create a ReportingManager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportingManager we want to update
     *   }
     * })
     */
    upsert<T extends ReportingManagerUpsertArgs>(args: SelectSubset<T, ReportingManagerUpsertArgs<ExtArgs>>): Prisma__ReportingManagerClient<$Result.GetResult<Prisma.$ReportingManagerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReportingManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportingManagerCountArgs} args - Arguments to filter ReportingManagers to count.
     * @example
     * // Count the number of ReportingManagers
     * const count = await prisma.reportingManager.count({
     *   where: {
     *     // ... the filter for the ReportingManagers we want to count
     *   }
     * })
    **/
    count<T extends ReportingManagerCountArgs>(
      args?: Subset<T, ReportingManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportingManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportingManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportingManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportingManagerAggregateArgs>(args: Subset<T, ReportingManagerAggregateArgs>): Prisma.PrismaPromise<GetReportingManagerAggregateType<T>>

    /**
     * Group by ReportingManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportingManagerGroupByArgs} args - Group by arguments.
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
      T extends ReportingManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportingManagerGroupByArgs['orderBy'] }
        : { orderBy?: ReportingManagerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportingManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportingManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReportingManager model
   */
  readonly fields: ReportingManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportingManager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportingManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ReportingManager model
   */
  interface ReportingManagerFieldRefs {
    readonly id: FieldRef<"ReportingManager", 'String'>
    readonly name: FieldRef<"ReportingManager", 'String'>
    readonly nameNormalized: FieldRef<"ReportingManager", 'String'>
    readonly createdAt: FieldRef<"ReportingManager", 'DateTime'>
    readonly updatedAt: FieldRef<"ReportingManager", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReportingManager findUnique
   */
  export type ReportingManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportingManager
     */
    select?: ReportingManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportingManager
     */
    omit?: ReportingManagerOmit<ExtArgs> | null
    /**
     * Filter, which ReportingManager to fetch.
     */
    where: ReportingManagerWhereUniqueInput
  }

  /**
   * ReportingManager findUniqueOrThrow
   */
  export type ReportingManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportingManager
     */
    select?: ReportingManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportingManager
     */
    omit?: ReportingManagerOmit<ExtArgs> | null
    /**
     * Filter, which ReportingManager to fetch.
     */
    where: ReportingManagerWhereUniqueInput
  }

  /**
   * ReportingManager findFirst
   */
  export type ReportingManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportingManager
     */
    select?: ReportingManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportingManager
     */
    omit?: ReportingManagerOmit<ExtArgs> | null
    /**
     * Filter, which ReportingManager to fetch.
     */
    where?: ReportingManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportingManagers to fetch.
     */
    orderBy?: ReportingManagerOrderByWithRelationInput | ReportingManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportingManagers.
     */
    cursor?: ReportingManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportingManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportingManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportingManagers.
     */
    distinct?: ReportingManagerScalarFieldEnum | ReportingManagerScalarFieldEnum[]
  }

  /**
   * ReportingManager findFirstOrThrow
   */
  export type ReportingManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportingManager
     */
    select?: ReportingManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportingManager
     */
    omit?: ReportingManagerOmit<ExtArgs> | null
    /**
     * Filter, which ReportingManager to fetch.
     */
    where?: ReportingManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportingManagers to fetch.
     */
    orderBy?: ReportingManagerOrderByWithRelationInput | ReportingManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportingManagers.
     */
    cursor?: ReportingManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportingManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportingManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportingManagers.
     */
    distinct?: ReportingManagerScalarFieldEnum | ReportingManagerScalarFieldEnum[]
  }

  /**
   * ReportingManager findMany
   */
  export type ReportingManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportingManager
     */
    select?: ReportingManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportingManager
     */
    omit?: ReportingManagerOmit<ExtArgs> | null
    /**
     * Filter, which ReportingManagers to fetch.
     */
    where?: ReportingManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportingManagers to fetch.
     */
    orderBy?: ReportingManagerOrderByWithRelationInput | ReportingManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportingManagers.
     */
    cursor?: ReportingManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportingManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportingManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportingManagers.
     */
    distinct?: ReportingManagerScalarFieldEnum | ReportingManagerScalarFieldEnum[]
  }

  /**
   * ReportingManager create
   */
  export type ReportingManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportingManager
     */
    select?: ReportingManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportingManager
     */
    omit?: ReportingManagerOmit<ExtArgs> | null
    /**
     * The data needed to create a ReportingManager.
     */
    data: XOR<ReportingManagerCreateInput, ReportingManagerUncheckedCreateInput>
  }

  /**
   * ReportingManager createMany
   */
  export type ReportingManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReportingManagers.
     */
    data: ReportingManagerCreateManyInput | ReportingManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportingManager createManyAndReturn
   */
  export type ReportingManagerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportingManager
     */
    select?: ReportingManagerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportingManager
     */
    omit?: ReportingManagerOmit<ExtArgs> | null
    /**
     * The data used to create many ReportingManagers.
     */
    data: ReportingManagerCreateManyInput | ReportingManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportingManager update
   */
  export type ReportingManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportingManager
     */
    select?: ReportingManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportingManager
     */
    omit?: ReportingManagerOmit<ExtArgs> | null
    /**
     * The data needed to update a ReportingManager.
     */
    data: XOR<ReportingManagerUpdateInput, ReportingManagerUncheckedUpdateInput>
    /**
     * Choose, which ReportingManager to update.
     */
    where: ReportingManagerWhereUniqueInput
  }

  /**
   * ReportingManager updateMany
   */
  export type ReportingManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReportingManagers.
     */
    data: XOR<ReportingManagerUpdateManyMutationInput, ReportingManagerUncheckedUpdateManyInput>
    /**
     * Filter which ReportingManagers to update
     */
    where?: ReportingManagerWhereInput
    /**
     * Limit how many ReportingManagers to update.
     */
    limit?: number
  }

  /**
   * ReportingManager updateManyAndReturn
   */
  export type ReportingManagerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportingManager
     */
    select?: ReportingManagerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportingManager
     */
    omit?: ReportingManagerOmit<ExtArgs> | null
    /**
     * The data used to update ReportingManagers.
     */
    data: XOR<ReportingManagerUpdateManyMutationInput, ReportingManagerUncheckedUpdateManyInput>
    /**
     * Filter which ReportingManagers to update
     */
    where?: ReportingManagerWhereInput
    /**
     * Limit how many ReportingManagers to update.
     */
    limit?: number
  }

  /**
   * ReportingManager upsert
   */
  export type ReportingManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportingManager
     */
    select?: ReportingManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportingManager
     */
    omit?: ReportingManagerOmit<ExtArgs> | null
    /**
     * The filter to search for the ReportingManager to update in case it exists.
     */
    where: ReportingManagerWhereUniqueInput
    /**
     * In case the ReportingManager found by the `where` argument doesn't exist, create a new ReportingManager with this data.
     */
    create: XOR<ReportingManagerCreateInput, ReportingManagerUncheckedCreateInput>
    /**
     * In case the ReportingManager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportingManagerUpdateInput, ReportingManagerUncheckedUpdateInput>
  }

  /**
   * ReportingManager delete
   */
  export type ReportingManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportingManager
     */
    select?: ReportingManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportingManager
     */
    omit?: ReportingManagerOmit<ExtArgs> | null
    /**
     * Filter which ReportingManager to delete.
     */
    where: ReportingManagerWhereUniqueInput
  }

  /**
   * ReportingManager deleteMany
   */
  export type ReportingManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportingManagers to delete
     */
    where?: ReportingManagerWhereInput
    /**
     * Limit how many ReportingManagers to delete.
     */
    limit?: number
  }

  /**
   * ReportingManager without action
   */
  export type ReportingManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportingManager
     */
    select?: ReportingManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportingManager
     */
    omit?: ReportingManagerOmit<ExtArgs> | null
  }


  /**
   * Model GlobalPrice
   */

  export type AggregateGlobalPrice = {
    _count: GlobalPriceCountAggregateOutputType | null
    _avg: GlobalPriceAvgAggregateOutputType | null
    _sum: GlobalPriceSumAggregateOutputType | null
    _min: GlobalPriceMinAggregateOutputType | null
    _max: GlobalPriceMaxAggregateOutputType | null
  }

  export type GlobalPriceAvgAggregateOutputType = {
    price: number | null
  }

  export type GlobalPriceSumAggregateOutputType = {
    price: number | null
  }

  export type GlobalPriceMinAggregateOutputType = {
    key: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlobalPriceMaxAggregateOutputType = {
    key: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlobalPriceCountAggregateOutputType = {
    key: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GlobalPriceAvgAggregateInputType = {
    price?: true
  }

  export type GlobalPriceSumAggregateInputType = {
    price?: true
  }

  export type GlobalPriceMinAggregateInputType = {
    key?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlobalPriceMaxAggregateInputType = {
    key?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlobalPriceCountAggregateInputType = {
    key?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GlobalPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalPrice to aggregate.
     */
    where?: GlobalPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPrices to fetch.
     */
    orderBy?: GlobalPriceOrderByWithRelationInput | GlobalPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalPrices
    **/
    _count?: true | GlobalPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlobalPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlobalPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalPriceMaxAggregateInputType
  }

  export type GetGlobalPriceAggregateType<T extends GlobalPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalPrice[P]>
      : GetScalarType<T[P], AggregateGlobalPrice[P]>
  }




  export type GlobalPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalPriceWhereInput
    orderBy?: GlobalPriceOrderByWithAggregationInput | GlobalPriceOrderByWithAggregationInput[]
    by: GlobalPriceScalarFieldEnum[] | GlobalPriceScalarFieldEnum
    having?: GlobalPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalPriceCountAggregateInputType | true
    _avg?: GlobalPriceAvgAggregateInputType
    _sum?: GlobalPriceSumAggregateInputType
    _min?: GlobalPriceMinAggregateInputType
    _max?: GlobalPriceMaxAggregateInputType
  }

  export type GlobalPriceGroupByOutputType = {
    key: string
    price: number
    createdAt: Date
    updatedAt: Date
    _count: GlobalPriceCountAggregateOutputType | null
    _avg: GlobalPriceAvgAggregateOutputType | null
    _sum: GlobalPriceSumAggregateOutputType | null
    _min: GlobalPriceMinAggregateOutputType | null
    _max: GlobalPriceMaxAggregateOutputType | null
  }

  type GetGlobalPriceGroupByPayload<T extends GlobalPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalPriceGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalPriceGroupByOutputType[P]>
        }
      >
    >


  export type GlobalPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalPrice"]>

  export type GlobalPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalPrice"]>

  export type GlobalPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalPrice"]>

  export type GlobalPriceSelectScalar = {
    key?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GlobalPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["globalPrice"]>

  export type $GlobalPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalPrice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["globalPrice"]>
    composites: {}
  }

  type GlobalPriceGetPayload<S extends boolean | null | undefined | GlobalPriceDefaultArgs> = $Result.GetResult<Prisma.$GlobalPricePayload, S>

  type GlobalPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalPriceCountAggregateInputType | true
    }

  export interface GlobalPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalPrice'], meta: { name: 'GlobalPrice' } }
    /**
     * Find zero or one GlobalPrice that matches the filter.
     * @param {GlobalPriceFindUniqueArgs} args - Arguments to find a GlobalPrice
     * @example
     * // Get one GlobalPrice
     * const globalPrice = await prisma.globalPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalPriceFindUniqueArgs>(args: SelectSubset<T, GlobalPriceFindUniqueArgs<ExtArgs>>): Prisma__GlobalPriceClient<$Result.GetResult<Prisma.$GlobalPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalPriceFindUniqueOrThrowArgs} args - Arguments to find a GlobalPrice
     * @example
     * // Get one GlobalPrice
     * const globalPrice = await prisma.globalPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalPriceClient<$Result.GetResult<Prisma.$GlobalPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPriceFindFirstArgs} args - Arguments to find a GlobalPrice
     * @example
     * // Get one GlobalPrice
     * const globalPrice = await prisma.globalPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalPriceFindFirstArgs>(args?: SelectSubset<T, GlobalPriceFindFirstArgs<ExtArgs>>): Prisma__GlobalPriceClient<$Result.GetResult<Prisma.$GlobalPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPriceFindFirstOrThrowArgs} args - Arguments to find a GlobalPrice
     * @example
     * // Get one GlobalPrice
     * const globalPrice = await prisma.globalPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalPriceClient<$Result.GetResult<Prisma.$GlobalPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalPrices
     * const globalPrices = await prisma.globalPrice.findMany()
     * 
     * // Get first 10 GlobalPrices
     * const globalPrices = await prisma.globalPrice.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const globalPriceWithKeyOnly = await prisma.globalPrice.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends GlobalPriceFindManyArgs>(args?: SelectSubset<T, GlobalPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalPrice.
     * @param {GlobalPriceCreateArgs} args - Arguments to create a GlobalPrice.
     * @example
     * // Create one GlobalPrice
     * const GlobalPrice = await prisma.globalPrice.create({
     *   data: {
     *     // ... data to create a GlobalPrice
     *   }
     * })
     * 
     */
    create<T extends GlobalPriceCreateArgs>(args: SelectSubset<T, GlobalPriceCreateArgs<ExtArgs>>): Prisma__GlobalPriceClient<$Result.GetResult<Prisma.$GlobalPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalPrices.
     * @param {GlobalPriceCreateManyArgs} args - Arguments to create many GlobalPrices.
     * @example
     * // Create many GlobalPrices
     * const globalPrice = await prisma.globalPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalPriceCreateManyArgs>(args?: SelectSubset<T, GlobalPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalPrices and returns the data saved in the database.
     * @param {GlobalPriceCreateManyAndReturnArgs} args - Arguments to create many GlobalPrices.
     * @example
     * // Create many GlobalPrices
     * const globalPrice = await prisma.globalPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalPrices and only return the `key`
     * const globalPriceWithKeyOnly = await prisma.globalPrice.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalPrice.
     * @param {GlobalPriceDeleteArgs} args - Arguments to delete one GlobalPrice.
     * @example
     * // Delete one GlobalPrice
     * const GlobalPrice = await prisma.globalPrice.delete({
     *   where: {
     *     // ... filter to delete one GlobalPrice
     *   }
     * })
     * 
     */
    delete<T extends GlobalPriceDeleteArgs>(args: SelectSubset<T, GlobalPriceDeleteArgs<ExtArgs>>): Prisma__GlobalPriceClient<$Result.GetResult<Prisma.$GlobalPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalPrice.
     * @param {GlobalPriceUpdateArgs} args - Arguments to update one GlobalPrice.
     * @example
     * // Update one GlobalPrice
     * const globalPrice = await prisma.globalPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalPriceUpdateArgs>(args: SelectSubset<T, GlobalPriceUpdateArgs<ExtArgs>>): Prisma__GlobalPriceClient<$Result.GetResult<Prisma.$GlobalPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalPrices.
     * @param {GlobalPriceDeleteManyArgs} args - Arguments to filter GlobalPrices to delete.
     * @example
     * // Delete a few GlobalPrices
     * const { count } = await prisma.globalPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalPriceDeleteManyArgs>(args?: SelectSubset<T, GlobalPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalPrices
     * const globalPrice = await prisma.globalPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalPriceUpdateManyArgs>(args: SelectSubset<T, GlobalPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalPrices and returns the data updated in the database.
     * @param {GlobalPriceUpdateManyAndReturnArgs} args - Arguments to update many GlobalPrices.
     * @example
     * // Update many GlobalPrices
     * const globalPrice = await prisma.globalPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalPrices and only return the `key`
     * const globalPriceWithKeyOnly = await prisma.globalPrice.updateManyAndReturn({
     *   select: { key: true },
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
    updateManyAndReturn<T extends GlobalPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalPrice.
     * @param {GlobalPriceUpsertArgs} args - Arguments to update or create a GlobalPrice.
     * @example
     * // Update or create a GlobalPrice
     * const globalPrice = await prisma.globalPrice.upsert({
     *   create: {
     *     // ... data to create a GlobalPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalPrice we want to update
     *   }
     * })
     */
    upsert<T extends GlobalPriceUpsertArgs>(args: SelectSubset<T, GlobalPriceUpsertArgs<ExtArgs>>): Prisma__GlobalPriceClient<$Result.GetResult<Prisma.$GlobalPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPriceCountArgs} args - Arguments to filter GlobalPrices to count.
     * @example
     * // Count the number of GlobalPrices
     * const count = await prisma.globalPrice.count({
     *   where: {
     *     // ... the filter for the GlobalPrices we want to count
     *   }
     * })
    **/
    count<T extends GlobalPriceCountArgs>(
      args?: Subset<T, GlobalPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlobalPriceAggregateArgs>(args: Subset<T, GlobalPriceAggregateArgs>): Prisma.PrismaPromise<GetGlobalPriceAggregateType<T>>

    /**
     * Group by GlobalPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPriceGroupByArgs} args - Group by arguments.
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
      T extends GlobalPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalPriceGroupByArgs['orderBy'] }
        : { orderBy?: GlobalPriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlobalPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalPrice model
   */
  readonly fields: GlobalPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GlobalPrice model
   */
  interface GlobalPriceFieldRefs {
    readonly key: FieldRef<"GlobalPrice", 'String'>
    readonly price: FieldRef<"GlobalPrice", 'Int'>
    readonly createdAt: FieldRef<"GlobalPrice", 'DateTime'>
    readonly updatedAt: FieldRef<"GlobalPrice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlobalPrice findUnique
   */
  export type GlobalPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPrice
     */
    select?: GlobalPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPrice
     */
    omit?: GlobalPriceOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPrice to fetch.
     */
    where: GlobalPriceWhereUniqueInput
  }

  /**
   * GlobalPrice findUniqueOrThrow
   */
  export type GlobalPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPrice
     */
    select?: GlobalPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPrice
     */
    omit?: GlobalPriceOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPrice to fetch.
     */
    where: GlobalPriceWhereUniqueInput
  }

  /**
   * GlobalPrice findFirst
   */
  export type GlobalPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPrice
     */
    select?: GlobalPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPrice
     */
    omit?: GlobalPriceOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPrice to fetch.
     */
    where?: GlobalPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPrices to fetch.
     */
    orderBy?: GlobalPriceOrderByWithRelationInput | GlobalPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalPrices.
     */
    cursor?: GlobalPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalPrices.
     */
    distinct?: GlobalPriceScalarFieldEnum | GlobalPriceScalarFieldEnum[]
  }

  /**
   * GlobalPrice findFirstOrThrow
   */
  export type GlobalPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPrice
     */
    select?: GlobalPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPrice
     */
    omit?: GlobalPriceOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPrice to fetch.
     */
    where?: GlobalPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPrices to fetch.
     */
    orderBy?: GlobalPriceOrderByWithRelationInput | GlobalPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalPrices.
     */
    cursor?: GlobalPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalPrices.
     */
    distinct?: GlobalPriceScalarFieldEnum | GlobalPriceScalarFieldEnum[]
  }

  /**
   * GlobalPrice findMany
   */
  export type GlobalPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPrice
     */
    select?: GlobalPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPrice
     */
    omit?: GlobalPriceOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPrices to fetch.
     */
    where?: GlobalPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPrices to fetch.
     */
    orderBy?: GlobalPriceOrderByWithRelationInput | GlobalPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalPrices.
     */
    cursor?: GlobalPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalPrices.
     */
    distinct?: GlobalPriceScalarFieldEnum | GlobalPriceScalarFieldEnum[]
  }

  /**
   * GlobalPrice create
   */
  export type GlobalPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPrice
     */
    select?: GlobalPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPrice
     */
    omit?: GlobalPriceOmit<ExtArgs> | null
    /**
     * The data needed to create a GlobalPrice.
     */
    data: XOR<GlobalPriceCreateInput, GlobalPriceUncheckedCreateInput>
  }

  /**
   * GlobalPrice createMany
   */
  export type GlobalPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalPrices.
     */
    data: GlobalPriceCreateManyInput | GlobalPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalPrice createManyAndReturn
   */
  export type GlobalPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPrice
     */
    select?: GlobalPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPrice
     */
    omit?: GlobalPriceOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalPrices.
     */
    data: GlobalPriceCreateManyInput | GlobalPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalPrice update
   */
  export type GlobalPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPrice
     */
    select?: GlobalPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPrice
     */
    omit?: GlobalPriceOmit<ExtArgs> | null
    /**
     * The data needed to update a GlobalPrice.
     */
    data: XOR<GlobalPriceUpdateInput, GlobalPriceUncheckedUpdateInput>
    /**
     * Choose, which GlobalPrice to update.
     */
    where: GlobalPriceWhereUniqueInput
  }

  /**
   * GlobalPrice updateMany
   */
  export type GlobalPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalPrices.
     */
    data: XOR<GlobalPriceUpdateManyMutationInput, GlobalPriceUncheckedUpdateManyInput>
    /**
     * Filter which GlobalPrices to update
     */
    where?: GlobalPriceWhereInput
    /**
     * Limit how many GlobalPrices to update.
     */
    limit?: number
  }

  /**
   * GlobalPrice updateManyAndReturn
   */
  export type GlobalPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPrice
     */
    select?: GlobalPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPrice
     */
    omit?: GlobalPriceOmit<ExtArgs> | null
    /**
     * The data used to update GlobalPrices.
     */
    data: XOR<GlobalPriceUpdateManyMutationInput, GlobalPriceUncheckedUpdateManyInput>
    /**
     * Filter which GlobalPrices to update
     */
    where?: GlobalPriceWhereInput
    /**
     * Limit how many GlobalPrices to update.
     */
    limit?: number
  }

  /**
   * GlobalPrice upsert
   */
  export type GlobalPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPrice
     */
    select?: GlobalPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPrice
     */
    omit?: GlobalPriceOmit<ExtArgs> | null
    /**
     * The filter to search for the GlobalPrice to update in case it exists.
     */
    where: GlobalPriceWhereUniqueInput
    /**
     * In case the GlobalPrice found by the `where` argument doesn't exist, create a new GlobalPrice with this data.
     */
    create: XOR<GlobalPriceCreateInput, GlobalPriceUncheckedCreateInput>
    /**
     * In case the GlobalPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalPriceUpdateInput, GlobalPriceUncheckedUpdateInput>
  }

  /**
   * GlobalPrice delete
   */
  export type GlobalPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPrice
     */
    select?: GlobalPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPrice
     */
    omit?: GlobalPriceOmit<ExtArgs> | null
    /**
     * Filter which GlobalPrice to delete.
     */
    where: GlobalPriceWhereUniqueInput
  }

  /**
   * GlobalPrice deleteMany
   */
  export type GlobalPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalPrices to delete
     */
    where?: GlobalPriceWhereInput
    /**
     * Limit how many GlobalPrices to delete.
     */
    limit?: number
  }

  /**
   * GlobalPrice without action
   */
  export type GlobalPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPrice
     */
    select?: GlobalPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPrice
     */
    omit?: GlobalPriceOmit<ExtArgs> | null
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
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const FormSubmissionScalarFieldEnum: {
    id: 'id',
    legacyId: 'legacyId',
    formType: 'formType',
    skPassportNo: 'skPassportNo',
    skPassportSeq: 'skPassportSeq',
    validationOtpGenerated: 'validationOtpGenerated',
    title: 'title',
    age: 'age',
    sameAsAbove: 'sameAsAbove',
    remarks: 'remarks',
    validationCode: 'validationCode',
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
    reporting_manager_name: 'reporting_manager_name',
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
    idProofBackData: 'idProofBackData',
    panProofPath: 'panProofPath',
    panProofData: 'panProofData',
    dealershipName: 'dealershipName',
    contactPerson: 'contactPerson',
    gstNumber: 'gstNumber',
    panNumber: 'panNumber',
    ownerSameAsAbove: 'ownerSameAsAbove',
    ownerTitle: 'ownerTitle',
    ownerFirstName: 'ownerFirstName',
    ownerLastName: 'ownerLastName',
    ownerOfficeAddressLine1: 'ownerOfficeAddressLine1',
    ownerOfficeAddressLine2: 'ownerOfficeAddressLine2',
    ownerCity: 'ownerCity',
    ownerState: 'ownerState',
    ownerPostalCode: 'ownerPostalCode',
    ownerPlace: 'ownerPlace',
    ownerPhoneNumber: 'ownerPhoneNumber',
    ownerEmailId: 'ownerEmailId',
    secondContactTitle: 'secondContactTitle',
    secondContactFirstName: 'secondContactFirstName',
    secondContactLastName: 'secondContactLastName',
    secondContactPhone: 'secondContactPhone',
    secondContactEmail: 'secondContactEmail',
    spouseName: 'spouseName',
    spouseDob: 'spouseDob',
    weddingDay: 'weddingDay',
    childName1: 'childName1',
    childDob1: 'childDob1',
    childName2: 'childName2',
    childDob2: 'childDob2',
    childName3: 'childName3',
    childDob3: 'childDob3',
    godownSameAsCompany: 'godownSameAsCompany',
    godownAddressLine1: 'godownAddressLine1',
    godownAddressLine2: 'godownAddressLine2',
    godownCity: 'godownCity',
    godownState: 'godownState',
    godownPostalCode: 'godownPostalCode',
    godownContactPerson: 'godownContactPerson',
    godownContactMobile: 'godownContactMobile',
    referenceName1: 'referenceName1',
    referencePhone1: 'referencePhone1',
    referenceDetails1: 'referenceDetails1',
    referenceName2: 'referenceName2',
    referencePhone2: 'referencePhone2',
    referenceDetails2: 'referenceDetails2'
  };

  export type FormSubmissionScalarFieldEnum = (typeof FormSubmissionScalarFieldEnum)[keyof typeof FormSubmissionScalarFieldEnum]


  export const LegacyRegistrationScalarFieldEnum: {
    id: 'id',
    legacySource: 'legacySource',
    legacyRowIndex: 'legacyRowIndex',
    legacyId: 'legacyId',
    legacyPassportNo: 'legacyPassportNo',
    rawTableRecord: 'rawTableRecord',
    rawDetailRecord: 'rawDetailRecord',
    submissionId: 'submissionId',
    createdAt: 'createdAt'
  };

  export type LegacyRegistrationScalarFieldEnum = (typeof LegacyRegistrationScalarFieldEnum)[keyof typeof LegacyRegistrationScalarFieldEnum]


  export const LegacyBlobScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    photoProofData: 'photoProofData',
    idProofData: 'idProofData',
    idProofBackData: 'idProofBackData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LegacyBlobScalarFieldEnum = (typeof LegacyBlobScalarFieldEnum)[keyof typeof LegacyBlobScalarFieldEnum]


  export const PassportCounterScalarFieldEnum: {
    key: 'key',
    lastIssued: 'lastIssued',
    updatedAt: 'updatedAt'
  };

  export type PassportCounterScalarFieldEnum = (typeof PassportCounterScalarFieldEnum)[keyof typeof PassportCounterScalarFieldEnum]


  export const SalesOfficerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nameNormalized: 'nameNormalized',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalesOfficerScalarFieldEnum = (typeof SalesOfficerScalarFieldEnum)[keyof typeof SalesOfficerScalarFieldEnum]


  export const ReportingManagerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nameNormalized: 'nameNormalized',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportingManagerScalarFieldEnum = (typeof ReportingManagerScalarFieldEnum)[keyof typeof ReportingManagerScalarFieldEnum]


  export const GlobalPriceScalarFieldEnum: {
    key: 'key',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GlobalPriceScalarFieldEnum = (typeof GlobalPriceScalarFieldEnum)[keyof typeof GlobalPriceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    role?: StringWithAggregatesFilter<"AdminUser"> | string
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
    skPassportSeq?: BigIntNullableFilter<"FormSubmission"> | bigint | number | null
    validationOtpGenerated?: StringNullableFilter<"FormSubmission"> | string | null
    title?: StringNullableFilter<"FormSubmission"> | string | null
    age?: StringNullableFilter<"FormSubmission"> | string | null
    sameAsAbove?: BoolNullableFilter<"FormSubmission"> | boolean | null
    remarks?: StringNullableFilter<"FormSubmission"> | string | null
    validationCode?: StringNullableFilter<"FormSubmission"> | string | null
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
    reporting_manager_name?: StringNullableFilter<"FormSubmission"> | string | null
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
    panProofPath?: StringNullableFilter<"FormSubmission"> | string | null
    panProofData?: StringNullableFilter<"FormSubmission"> | string | null
    dealershipName?: StringNullableFilter<"FormSubmission"> | string | null
    contactPerson?: StringNullableFilter<"FormSubmission"> | string | null
    gstNumber?: StringNullableFilter<"FormSubmission"> | string | null
    panNumber?: StringNullableFilter<"FormSubmission"> | string | null
    ownerSameAsAbove?: BoolNullableFilter<"FormSubmission"> | boolean | null
    ownerTitle?: StringNullableFilter<"FormSubmission"> | string | null
    ownerFirstName?: StringNullableFilter<"FormSubmission"> | string | null
    ownerLastName?: StringNullableFilter<"FormSubmission"> | string | null
    ownerOfficeAddressLine1?: StringNullableFilter<"FormSubmission"> | string | null
    ownerOfficeAddressLine2?: StringNullableFilter<"FormSubmission"> | string | null
    ownerCity?: StringNullableFilter<"FormSubmission"> | string | null
    ownerState?: StringNullableFilter<"FormSubmission"> | string | null
    ownerPostalCode?: StringNullableFilter<"FormSubmission"> | string | null
    ownerPlace?: StringNullableFilter<"FormSubmission"> | string | null
    ownerPhoneNumber?: StringNullableFilter<"FormSubmission"> | string | null
    ownerEmailId?: StringNullableFilter<"FormSubmission"> | string | null
    secondContactTitle?: StringNullableFilter<"FormSubmission"> | string | null
    secondContactFirstName?: StringNullableFilter<"FormSubmission"> | string | null
    secondContactLastName?: StringNullableFilter<"FormSubmission"> | string | null
    secondContactPhone?: StringNullableFilter<"FormSubmission"> | string | null
    secondContactEmail?: StringNullableFilter<"FormSubmission"> | string | null
    spouseName?: StringNullableFilter<"FormSubmission"> | string | null
    spouseDob?: StringNullableFilter<"FormSubmission"> | string | null
    weddingDay?: StringNullableFilter<"FormSubmission"> | string | null
    childName1?: StringNullableFilter<"FormSubmission"> | string | null
    childDob1?: StringNullableFilter<"FormSubmission"> | string | null
    childName2?: StringNullableFilter<"FormSubmission"> | string | null
    childDob2?: StringNullableFilter<"FormSubmission"> | string | null
    childName3?: StringNullableFilter<"FormSubmission"> | string | null
    childDob3?: StringNullableFilter<"FormSubmission"> | string | null
    godownSameAsCompany?: BoolNullableFilter<"FormSubmission"> | boolean | null
    godownAddressLine1?: StringNullableFilter<"FormSubmission"> | string | null
    godownAddressLine2?: StringNullableFilter<"FormSubmission"> | string | null
    godownCity?: StringNullableFilter<"FormSubmission"> | string | null
    godownState?: StringNullableFilter<"FormSubmission"> | string | null
    godownPostalCode?: StringNullableFilter<"FormSubmission"> | string | null
    godownContactPerson?: StringNullableFilter<"FormSubmission"> | string | null
    godownContactMobile?: StringNullableFilter<"FormSubmission"> | string | null
    referenceName1?: StringNullableFilter<"FormSubmission"> | string | null
    referencePhone1?: StringNullableFilter<"FormSubmission"> | string | null
    referenceDetails1?: StringNullableFilter<"FormSubmission"> | string | null
    referenceName2?: StringNullableFilter<"FormSubmission"> | string | null
    referencePhone2?: StringNullableFilter<"FormSubmission"> | string | null
    referenceDetails2?: StringNullableFilter<"FormSubmission"> | string | null
    legacyRegistrations?: LegacyRegistrationListRelationFilter
    legacyBlob?: XOR<LegacyBlobNullableScalarRelationFilter, LegacyBlobWhereInput> | null
  }

  export type FormSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    legacyId?: SortOrderInput | SortOrder
    formType?: SortOrder
    skPassportNo?: SortOrderInput | SortOrder
    skPassportSeq?: SortOrderInput | SortOrder
    validationOtpGenerated?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    sameAsAbove?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    validationCode?: SortOrderInput | SortOrder
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
    reporting_manager_name?: SortOrderInput | SortOrder
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
    panProofPath?: SortOrderInput | SortOrder
    panProofData?: SortOrderInput | SortOrder
    dealershipName?: SortOrderInput | SortOrder
    contactPerson?: SortOrderInput | SortOrder
    gstNumber?: SortOrderInput | SortOrder
    panNumber?: SortOrderInput | SortOrder
    ownerSameAsAbove?: SortOrderInput | SortOrder
    ownerTitle?: SortOrderInput | SortOrder
    ownerFirstName?: SortOrderInput | SortOrder
    ownerLastName?: SortOrderInput | SortOrder
    ownerOfficeAddressLine1?: SortOrderInput | SortOrder
    ownerOfficeAddressLine2?: SortOrderInput | SortOrder
    ownerCity?: SortOrderInput | SortOrder
    ownerState?: SortOrderInput | SortOrder
    ownerPostalCode?: SortOrderInput | SortOrder
    ownerPlace?: SortOrderInput | SortOrder
    ownerPhoneNumber?: SortOrderInput | SortOrder
    ownerEmailId?: SortOrderInput | SortOrder
    secondContactTitle?: SortOrderInput | SortOrder
    secondContactFirstName?: SortOrderInput | SortOrder
    secondContactLastName?: SortOrderInput | SortOrder
    secondContactPhone?: SortOrderInput | SortOrder
    secondContactEmail?: SortOrderInput | SortOrder
    spouseName?: SortOrderInput | SortOrder
    spouseDob?: SortOrderInput | SortOrder
    weddingDay?: SortOrderInput | SortOrder
    childName1?: SortOrderInput | SortOrder
    childDob1?: SortOrderInput | SortOrder
    childName2?: SortOrderInput | SortOrder
    childDob2?: SortOrderInput | SortOrder
    childName3?: SortOrderInput | SortOrder
    childDob3?: SortOrderInput | SortOrder
    godownSameAsCompany?: SortOrderInput | SortOrder
    godownAddressLine1?: SortOrderInput | SortOrder
    godownAddressLine2?: SortOrderInput | SortOrder
    godownCity?: SortOrderInput | SortOrder
    godownState?: SortOrderInput | SortOrder
    godownPostalCode?: SortOrderInput | SortOrder
    godownContactPerson?: SortOrderInput | SortOrder
    godownContactMobile?: SortOrderInput | SortOrder
    referenceName1?: SortOrderInput | SortOrder
    referencePhone1?: SortOrderInput | SortOrder
    referenceDetails1?: SortOrderInput | SortOrder
    referenceName2?: SortOrderInput | SortOrder
    referencePhone2?: SortOrderInput | SortOrder
    referenceDetails2?: SortOrderInput | SortOrder
    legacyRegistrations?: LegacyRegistrationOrderByRelationAggregateInput
    legacyBlob?: LegacyBlobOrderByWithRelationInput
  }

  export type FormSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    skPassportSeq?: bigint | number
    AND?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    OR?: FormSubmissionWhereInput[]
    NOT?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    legacyId?: IntNullableFilter<"FormSubmission"> | number | null
    formType?: StringFilter<"FormSubmission"> | string
    skPassportNo?: StringNullableFilter<"FormSubmission"> | string | null
    validationOtpGenerated?: StringNullableFilter<"FormSubmission"> | string | null
    title?: StringNullableFilter<"FormSubmission"> | string | null
    age?: StringNullableFilter<"FormSubmission"> | string | null
    sameAsAbove?: BoolNullableFilter<"FormSubmission"> | boolean | null
    remarks?: StringNullableFilter<"FormSubmission"> | string | null
    validationCode?: StringNullableFilter<"FormSubmission"> | string | null
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
    reporting_manager_name?: StringNullableFilter<"FormSubmission"> | string | null
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
    panProofPath?: StringNullableFilter<"FormSubmission"> | string | null
    panProofData?: StringNullableFilter<"FormSubmission"> | string | null
    dealershipName?: StringNullableFilter<"FormSubmission"> | string | null
    contactPerson?: StringNullableFilter<"FormSubmission"> | string | null
    gstNumber?: StringNullableFilter<"FormSubmission"> | string | null
    panNumber?: StringNullableFilter<"FormSubmission"> | string | null
    ownerSameAsAbove?: BoolNullableFilter<"FormSubmission"> | boolean | null
    ownerTitle?: StringNullableFilter<"FormSubmission"> | string | null
    ownerFirstName?: StringNullableFilter<"FormSubmission"> | string | null
    ownerLastName?: StringNullableFilter<"FormSubmission"> | string | null
    ownerOfficeAddressLine1?: StringNullableFilter<"FormSubmission"> | string | null
    ownerOfficeAddressLine2?: StringNullableFilter<"FormSubmission"> | string | null
    ownerCity?: StringNullableFilter<"FormSubmission"> | string | null
    ownerState?: StringNullableFilter<"FormSubmission"> | string | null
    ownerPostalCode?: StringNullableFilter<"FormSubmission"> | string | null
    ownerPlace?: StringNullableFilter<"FormSubmission"> | string | null
    ownerPhoneNumber?: StringNullableFilter<"FormSubmission"> | string | null
    ownerEmailId?: StringNullableFilter<"FormSubmission"> | string | null
    secondContactTitle?: StringNullableFilter<"FormSubmission"> | string | null
    secondContactFirstName?: StringNullableFilter<"FormSubmission"> | string | null
    secondContactLastName?: StringNullableFilter<"FormSubmission"> | string | null
    secondContactPhone?: StringNullableFilter<"FormSubmission"> | string | null
    secondContactEmail?: StringNullableFilter<"FormSubmission"> | string | null
    spouseName?: StringNullableFilter<"FormSubmission"> | string | null
    spouseDob?: StringNullableFilter<"FormSubmission"> | string | null
    weddingDay?: StringNullableFilter<"FormSubmission"> | string | null
    childName1?: StringNullableFilter<"FormSubmission"> | string | null
    childDob1?: StringNullableFilter<"FormSubmission"> | string | null
    childName2?: StringNullableFilter<"FormSubmission"> | string | null
    childDob2?: StringNullableFilter<"FormSubmission"> | string | null
    childName3?: StringNullableFilter<"FormSubmission"> | string | null
    childDob3?: StringNullableFilter<"FormSubmission"> | string | null
    godownSameAsCompany?: BoolNullableFilter<"FormSubmission"> | boolean | null
    godownAddressLine1?: StringNullableFilter<"FormSubmission"> | string | null
    godownAddressLine2?: StringNullableFilter<"FormSubmission"> | string | null
    godownCity?: StringNullableFilter<"FormSubmission"> | string | null
    godownState?: StringNullableFilter<"FormSubmission"> | string | null
    godownPostalCode?: StringNullableFilter<"FormSubmission"> | string | null
    godownContactPerson?: StringNullableFilter<"FormSubmission"> | string | null
    godownContactMobile?: StringNullableFilter<"FormSubmission"> | string | null
    referenceName1?: StringNullableFilter<"FormSubmission"> | string | null
    referencePhone1?: StringNullableFilter<"FormSubmission"> | string | null
    referenceDetails1?: StringNullableFilter<"FormSubmission"> | string | null
    referenceName2?: StringNullableFilter<"FormSubmission"> | string | null
    referencePhone2?: StringNullableFilter<"FormSubmission"> | string | null
    referenceDetails2?: StringNullableFilter<"FormSubmission"> | string | null
    legacyRegistrations?: LegacyRegistrationListRelationFilter
    legacyBlob?: XOR<LegacyBlobNullableScalarRelationFilter, LegacyBlobWhereInput> | null
  }, "id" | "skPassportSeq">

  export type FormSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    legacyId?: SortOrderInput | SortOrder
    formType?: SortOrder
    skPassportNo?: SortOrderInput | SortOrder
    skPassportSeq?: SortOrderInput | SortOrder
    validationOtpGenerated?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    sameAsAbove?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    validationCode?: SortOrderInput | SortOrder
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
    reporting_manager_name?: SortOrderInput | SortOrder
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
    panProofPath?: SortOrderInput | SortOrder
    panProofData?: SortOrderInput | SortOrder
    dealershipName?: SortOrderInput | SortOrder
    contactPerson?: SortOrderInput | SortOrder
    gstNumber?: SortOrderInput | SortOrder
    panNumber?: SortOrderInput | SortOrder
    ownerSameAsAbove?: SortOrderInput | SortOrder
    ownerTitle?: SortOrderInput | SortOrder
    ownerFirstName?: SortOrderInput | SortOrder
    ownerLastName?: SortOrderInput | SortOrder
    ownerOfficeAddressLine1?: SortOrderInput | SortOrder
    ownerOfficeAddressLine2?: SortOrderInput | SortOrder
    ownerCity?: SortOrderInput | SortOrder
    ownerState?: SortOrderInput | SortOrder
    ownerPostalCode?: SortOrderInput | SortOrder
    ownerPlace?: SortOrderInput | SortOrder
    ownerPhoneNumber?: SortOrderInput | SortOrder
    ownerEmailId?: SortOrderInput | SortOrder
    secondContactTitle?: SortOrderInput | SortOrder
    secondContactFirstName?: SortOrderInput | SortOrder
    secondContactLastName?: SortOrderInput | SortOrder
    secondContactPhone?: SortOrderInput | SortOrder
    secondContactEmail?: SortOrderInput | SortOrder
    spouseName?: SortOrderInput | SortOrder
    spouseDob?: SortOrderInput | SortOrder
    weddingDay?: SortOrderInput | SortOrder
    childName1?: SortOrderInput | SortOrder
    childDob1?: SortOrderInput | SortOrder
    childName2?: SortOrderInput | SortOrder
    childDob2?: SortOrderInput | SortOrder
    childName3?: SortOrderInput | SortOrder
    childDob3?: SortOrderInput | SortOrder
    godownSameAsCompany?: SortOrderInput | SortOrder
    godownAddressLine1?: SortOrderInput | SortOrder
    godownAddressLine2?: SortOrderInput | SortOrder
    godownCity?: SortOrderInput | SortOrder
    godownState?: SortOrderInput | SortOrder
    godownPostalCode?: SortOrderInput | SortOrder
    godownContactPerson?: SortOrderInput | SortOrder
    godownContactMobile?: SortOrderInput | SortOrder
    referenceName1?: SortOrderInput | SortOrder
    referencePhone1?: SortOrderInput | SortOrder
    referenceDetails1?: SortOrderInput | SortOrder
    referenceName2?: SortOrderInput | SortOrder
    referencePhone2?: SortOrderInput | SortOrder
    referenceDetails2?: SortOrderInput | SortOrder
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
    skPassportSeq?: BigIntNullableWithAggregatesFilter<"FormSubmission"> | bigint | number | null
    validationOtpGenerated?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    title?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    age?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    sameAsAbove?: BoolNullableWithAggregatesFilter<"FormSubmission"> | boolean | null
    remarks?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    validationCode?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
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
    reporting_manager_name?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
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
    panProofPath?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    panProofData?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    dealershipName?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    contactPerson?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    gstNumber?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    panNumber?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    ownerSameAsAbove?: BoolNullableWithAggregatesFilter<"FormSubmission"> | boolean | null
    ownerTitle?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    ownerFirstName?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    ownerLastName?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    ownerOfficeAddressLine1?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    ownerOfficeAddressLine2?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    ownerCity?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    ownerState?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    ownerPostalCode?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    ownerPlace?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    ownerPhoneNumber?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    ownerEmailId?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    secondContactTitle?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    secondContactFirstName?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    secondContactLastName?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    secondContactPhone?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    secondContactEmail?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    spouseName?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    spouseDob?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    weddingDay?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    childName1?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    childDob1?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    childName2?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    childDob2?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    childName3?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    childDob3?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    godownSameAsCompany?: BoolNullableWithAggregatesFilter<"FormSubmission"> | boolean | null
    godownAddressLine1?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    godownAddressLine2?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    godownCity?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    godownState?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    godownPostalCode?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    godownContactPerson?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    godownContactMobile?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    referenceName1?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    referencePhone1?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    referenceDetails1?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    referenceName2?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    referencePhone2?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
    referenceDetails2?: StringNullableWithAggregatesFilter<"FormSubmission"> | string | null
  }

  export type LegacyRegistrationWhereInput = {
    AND?: LegacyRegistrationWhereInput | LegacyRegistrationWhereInput[]
    OR?: LegacyRegistrationWhereInput[]
    NOT?: LegacyRegistrationWhereInput | LegacyRegistrationWhereInput[]
    id?: StringFilter<"LegacyRegistration"> | string
    legacySource?: StringFilter<"LegacyRegistration"> | string
    legacyRowIndex?: IntFilter<"LegacyRegistration"> | number
    legacyId?: IntNullableFilter<"LegacyRegistration"> | number | null
    legacyPassportNo?: StringNullableFilter<"LegacyRegistration"> | string | null
    rawTableRecord?: JsonNullableFilter<"LegacyRegistration">
    rawDetailRecord?: JsonNullableFilter<"LegacyRegistration">
    submissionId?: StringNullableFilter<"LegacyRegistration"> | string | null
    createdAt?: DateTimeFilter<"LegacyRegistration"> | Date | string
    submission?: XOR<FormSubmissionNullableScalarRelationFilter, FormSubmissionWhereInput> | null
  }

  export type LegacyRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    legacySource?: SortOrder
    legacyRowIndex?: SortOrder
    legacyId?: SortOrderInput | SortOrder
    legacyPassportNo?: SortOrderInput | SortOrder
    rawTableRecord?: SortOrderInput | SortOrder
    rawDetailRecord?: SortOrderInput | SortOrder
    submissionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    submission?: FormSubmissionOrderByWithRelationInput
  }

  export type LegacyRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    legacySource_legacyRowIndex?: LegacyRegistrationLegacySourceLegacyRowIndexCompoundUniqueInput
    AND?: LegacyRegistrationWhereInput | LegacyRegistrationWhereInput[]
    OR?: LegacyRegistrationWhereInput[]
    NOT?: LegacyRegistrationWhereInput | LegacyRegistrationWhereInput[]
    legacySource?: StringFilter<"LegacyRegistration"> | string
    legacyRowIndex?: IntFilter<"LegacyRegistration"> | number
    legacyId?: IntNullableFilter<"LegacyRegistration"> | number | null
    legacyPassportNo?: StringNullableFilter<"LegacyRegistration"> | string | null
    rawTableRecord?: JsonNullableFilter<"LegacyRegistration">
    rawDetailRecord?: JsonNullableFilter<"LegacyRegistration">
    submissionId?: StringNullableFilter<"LegacyRegistration"> | string | null
    createdAt?: DateTimeFilter<"LegacyRegistration"> | Date | string
    submission?: XOR<FormSubmissionNullableScalarRelationFilter, FormSubmissionWhereInput> | null
  }, "id" | "legacySource_legacyRowIndex">

  export type LegacyRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    legacySource?: SortOrder
    legacyRowIndex?: SortOrder
    legacyId?: SortOrderInput | SortOrder
    legacyPassportNo?: SortOrderInput | SortOrder
    rawTableRecord?: SortOrderInput | SortOrder
    rawDetailRecord?: SortOrderInput | SortOrder
    submissionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LegacyRegistrationCountOrderByAggregateInput
    _avg?: LegacyRegistrationAvgOrderByAggregateInput
    _max?: LegacyRegistrationMaxOrderByAggregateInput
    _min?: LegacyRegistrationMinOrderByAggregateInput
    _sum?: LegacyRegistrationSumOrderByAggregateInput
  }

  export type LegacyRegistrationScalarWhereWithAggregatesInput = {
    AND?: LegacyRegistrationScalarWhereWithAggregatesInput | LegacyRegistrationScalarWhereWithAggregatesInput[]
    OR?: LegacyRegistrationScalarWhereWithAggregatesInput[]
    NOT?: LegacyRegistrationScalarWhereWithAggregatesInput | LegacyRegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LegacyRegistration"> | string
    legacySource?: StringWithAggregatesFilter<"LegacyRegistration"> | string
    legacyRowIndex?: IntWithAggregatesFilter<"LegacyRegistration"> | number
    legacyId?: IntNullableWithAggregatesFilter<"LegacyRegistration"> | number | null
    legacyPassportNo?: StringNullableWithAggregatesFilter<"LegacyRegistration"> | string | null
    rawTableRecord?: JsonNullableWithAggregatesFilter<"LegacyRegistration">
    rawDetailRecord?: JsonNullableWithAggregatesFilter<"LegacyRegistration">
    submissionId?: StringNullableWithAggregatesFilter<"LegacyRegistration"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LegacyRegistration"> | Date | string
  }

  export type LegacyBlobWhereInput = {
    AND?: LegacyBlobWhereInput | LegacyBlobWhereInput[]
    OR?: LegacyBlobWhereInput[]
    NOT?: LegacyBlobWhereInput | LegacyBlobWhereInput[]
    id?: StringFilter<"LegacyBlob"> | string
    submissionId?: StringFilter<"LegacyBlob"> | string
    photoProofData?: StringNullableFilter<"LegacyBlob"> | string | null
    idProofData?: StringNullableFilter<"LegacyBlob"> | string | null
    idProofBackData?: StringNullableFilter<"LegacyBlob"> | string | null
    createdAt?: DateTimeFilter<"LegacyBlob"> | Date | string
    updatedAt?: DateTimeFilter<"LegacyBlob"> | Date | string
    submission?: XOR<FormSubmissionScalarRelationFilter, FormSubmissionWhereInput>
  }

  export type LegacyBlobOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    photoProofData?: SortOrderInput | SortOrder
    idProofData?: SortOrderInput | SortOrder
    idProofBackData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submission?: FormSubmissionOrderByWithRelationInput
  }

  export type LegacyBlobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    submissionId?: string
    AND?: LegacyBlobWhereInput | LegacyBlobWhereInput[]
    OR?: LegacyBlobWhereInput[]
    NOT?: LegacyBlobWhereInput | LegacyBlobWhereInput[]
    photoProofData?: StringNullableFilter<"LegacyBlob"> | string | null
    idProofData?: StringNullableFilter<"LegacyBlob"> | string | null
    idProofBackData?: StringNullableFilter<"LegacyBlob"> | string | null
    createdAt?: DateTimeFilter<"LegacyBlob"> | Date | string
    updatedAt?: DateTimeFilter<"LegacyBlob"> | Date | string
    submission?: XOR<FormSubmissionScalarRelationFilter, FormSubmissionWhereInput>
  }, "id" | "submissionId">

  export type LegacyBlobOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    photoProofData?: SortOrderInput | SortOrder
    idProofData?: SortOrderInput | SortOrder
    idProofBackData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LegacyBlobCountOrderByAggregateInput
    _max?: LegacyBlobMaxOrderByAggregateInput
    _min?: LegacyBlobMinOrderByAggregateInput
  }

  export type LegacyBlobScalarWhereWithAggregatesInput = {
    AND?: LegacyBlobScalarWhereWithAggregatesInput | LegacyBlobScalarWhereWithAggregatesInput[]
    OR?: LegacyBlobScalarWhereWithAggregatesInput[]
    NOT?: LegacyBlobScalarWhereWithAggregatesInput | LegacyBlobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LegacyBlob"> | string
    submissionId?: StringWithAggregatesFilter<"LegacyBlob"> | string
    photoProofData?: StringNullableWithAggregatesFilter<"LegacyBlob"> | string | null
    idProofData?: StringNullableWithAggregatesFilter<"LegacyBlob"> | string | null
    idProofBackData?: StringNullableWithAggregatesFilter<"LegacyBlob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LegacyBlob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LegacyBlob"> | Date | string
  }

  export type PassportCounterWhereInput = {
    AND?: PassportCounterWhereInput | PassportCounterWhereInput[]
    OR?: PassportCounterWhereInput[]
    NOT?: PassportCounterWhereInput | PassportCounterWhereInput[]
    key?: StringFilter<"PassportCounter"> | string
    lastIssued?: BigIntFilter<"PassportCounter"> | bigint | number
    updatedAt?: DateTimeFilter<"PassportCounter"> | Date | string
  }

  export type PassportCounterOrderByWithRelationInput = {
    key?: SortOrder
    lastIssued?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassportCounterWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: PassportCounterWhereInput | PassportCounterWhereInput[]
    OR?: PassportCounterWhereInput[]
    NOT?: PassportCounterWhereInput | PassportCounterWhereInput[]
    lastIssued?: BigIntFilter<"PassportCounter"> | bigint | number
    updatedAt?: DateTimeFilter<"PassportCounter"> | Date | string
  }, "key">

  export type PassportCounterOrderByWithAggregationInput = {
    key?: SortOrder
    lastIssued?: SortOrder
    updatedAt?: SortOrder
    _count?: PassportCounterCountOrderByAggregateInput
    _avg?: PassportCounterAvgOrderByAggregateInput
    _max?: PassportCounterMaxOrderByAggregateInput
    _min?: PassportCounterMinOrderByAggregateInput
    _sum?: PassportCounterSumOrderByAggregateInput
  }

  export type PassportCounterScalarWhereWithAggregatesInput = {
    AND?: PassportCounterScalarWhereWithAggregatesInput | PassportCounterScalarWhereWithAggregatesInput[]
    OR?: PassportCounterScalarWhereWithAggregatesInput[]
    NOT?: PassportCounterScalarWhereWithAggregatesInput | PassportCounterScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"PassportCounter"> | string
    lastIssued?: BigIntWithAggregatesFilter<"PassportCounter"> | bigint | number
    updatedAt?: DateTimeWithAggregatesFilter<"PassportCounter"> | Date | string
  }

  export type SalesOfficerWhereInput = {
    AND?: SalesOfficerWhereInput | SalesOfficerWhereInput[]
    OR?: SalesOfficerWhereInput[]
    NOT?: SalesOfficerWhereInput | SalesOfficerWhereInput[]
    id?: StringFilter<"SalesOfficer"> | string
    name?: StringFilter<"SalesOfficer"> | string
    nameNormalized?: StringFilter<"SalesOfficer"> | string
    createdAt?: DateTimeFilter<"SalesOfficer"> | Date | string
    updatedAt?: DateTimeFilter<"SalesOfficer"> | Date | string
  }

  export type SalesOfficerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nameNormalized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOfficerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    nameNormalized?: string
    AND?: SalesOfficerWhereInput | SalesOfficerWhereInput[]
    OR?: SalesOfficerWhereInput[]
    NOT?: SalesOfficerWhereInput | SalesOfficerWhereInput[]
    createdAt?: DateTimeFilter<"SalesOfficer"> | Date | string
    updatedAt?: DateTimeFilter<"SalesOfficer"> | Date | string
  }, "id" | "name" | "nameNormalized">

  export type SalesOfficerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nameNormalized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalesOfficerCountOrderByAggregateInput
    _max?: SalesOfficerMaxOrderByAggregateInput
    _min?: SalesOfficerMinOrderByAggregateInput
  }

  export type SalesOfficerScalarWhereWithAggregatesInput = {
    AND?: SalesOfficerScalarWhereWithAggregatesInput | SalesOfficerScalarWhereWithAggregatesInput[]
    OR?: SalesOfficerScalarWhereWithAggregatesInput[]
    NOT?: SalesOfficerScalarWhereWithAggregatesInput | SalesOfficerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesOfficer"> | string
    name?: StringWithAggregatesFilter<"SalesOfficer"> | string
    nameNormalized?: StringWithAggregatesFilter<"SalesOfficer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SalesOfficer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalesOfficer"> | Date | string
  }

  export type ReportingManagerWhereInput = {
    AND?: ReportingManagerWhereInput | ReportingManagerWhereInput[]
    OR?: ReportingManagerWhereInput[]
    NOT?: ReportingManagerWhereInput | ReportingManagerWhereInput[]
    id?: StringFilter<"ReportingManager"> | string
    name?: StringFilter<"ReportingManager"> | string
    nameNormalized?: StringFilter<"ReportingManager"> | string
    createdAt?: DateTimeFilter<"ReportingManager"> | Date | string
    updatedAt?: DateTimeFilter<"ReportingManager"> | Date | string
  }

  export type ReportingManagerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nameNormalized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportingManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    nameNormalized?: string
    AND?: ReportingManagerWhereInput | ReportingManagerWhereInput[]
    OR?: ReportingManagerWhereInput[]
    NOT?: ReportingManagerWhereInput | ReportingManagerWhereInput[]
    createdAt?: DateTimeFilter<"ReportingManager"> | Date | string
    updatedAt?: DateTimeFilter<"ReportingManager"> | Date | string
  }, "id" | "name" | "nameNormalized">

  export type ReportingManagerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nameNormalized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportingManagerCountOrderByAggregateInput
    _max?: ReportingManagerMaxOrderByAggregateInput
    _min?: ReportingManagerMinOrderByAggregateInput
  }

  export type ReportingManagerScalarWhereWithAggregatesInput = {
    AND?: ReportingManagerScalarWhereWithAggregatesInput | ReportingManagerScalarWhereWithAggregatesInput[]
    OR?: ReportingManagerScalarWhereWithAggregatesInput[]
    NOT?: ReportingManagerScalarWhereWithAggregatesInput | ReportingManagerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReportingManager"> | string
    name?: StringWithAggregatesFilter<"ReportingManager"> | string
    nameNormalized?: StringWithAggregatesFilter<"ReportingManager"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReportingManager"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReportingManager"> | Date | string
  }

  export type GlobalPriceWhereInput = {
    AND?: GlobalPriceWhereInput | GlobalPriceWhereInput[]
    OR?: GlobalPriceWhereInput[]
    NOT?: GlobalPriceWhereInput | GlobalPriceWhereInput[]
    key?: StringFilter<"GlobalPrice"> | string
    price?: IntFilter<"GlobalPrice"> | number
    createdAt?: DateTimeFilter<"GlobalPrice"> | Date | string
    updatedAt?: DateTimeFilter<"GlobalPrice"> | Date | string
  }

  export type GlobalPriceOrderByWithRelationInput = {
    key?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPriceWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: GlobalPriceWhereInput | GlobalPriceWhereInput[]
    OR?: GlobalPriceWhereInput[]
    NOT?: GlobalPriceWhereInput | GlobalPriceWhereInput[]
    price?: IntFilter<"GlobalPrice"> | number
    createdAt?: DateTimeFilter<"GlobalPrice"> | Date | string
    updatedAt?: DateTimeFilter<"GlobalPrice"> | Date | string
  }, "key">

  export type GlobalPriceOrderByWithAggregationInput = {
    key?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GlobalPriceCountOrderByAggregateInput
    _avg?: GlobalPriceAvgOrderByAggregateInput
    _max?: GlobalPriceMaxOrderByAggregateInput
    _min?: GlobalPriceMinOrderByAggregateInput
    _sum?: GlobalPriceSumOrderByAggregateInput
  }

  export type GlobalPriceScalarWhereWithAggregatesInput = {
    AND?: GlobalPriceScalarWhereWithAggregatesInput | GlobalPriceScalarWhereWithAggregatesInput[]
    OR?: GlobalPriceScalarWhereWithAggregatesInput[]
    NOT?: GlobalPriceScalarWhereWithAggregatesInput | GlobalPriceScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"GlobalPrice"> | string
    price?: IntWithAggregatesFilter<"GlobalPrice"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GlobalPrice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GlobalPrice"> | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionCreateInput = {
    id?: string
    legacyId?: number | null
    formType: string
    skPassportNo?: string | null
    skPassportSeq?: bigint | number | null
    validationOtpGenerated?: string | null
    title?: string | null
    age?: string | null
    sameAsAbove?: boolean | null
    remarks?: string | null
    validationCode?: string | null
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
    reporting_manager_name?: string | null
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
    panProofPath?: string | null
    panProofData?: string | null
    dealershipName?: string | null
    contactPerson?: string | null
    gstNumber?: string | null
    panNumber?: string | null
    ownerSameAsAbove?: boolean | null
    ownerTitle?: string | null
    ownerFirstName?: string | null
    ownerLastName?: string | null
    ownerOfficeAddressLine1?: string | null
    ownerOfficeAddressLine2?: string | null
    ownerCity?: string | null
    ownerState?: string | null
    ownerPostalCode?: string | null
    ownerPlace?: string | null
    ownerPhoneNumber?: string | null
    ownerEmailId?: string | null
    secondContactTitle?: string | null
    secondContactFirstName?: string | null
    secondContactLastName?: string | null
    secondContactPhone?: string | null
    secondContactEmail?: string | null
    spouseName?: string | null
    spouseDob?: string | null
    weddingDay?: string | null
    childName1?: string | null
    childDob1?: string | null
    childName2?: string | null
    childDob2?: string | null
    childName3?: string | null
    childDob3?: string | null
    godownSameAsCompany?: boolean | null
    godownAddressLine1?: string | null
    godownAddressLine2?: string | null
    godownCity?: string | null
    godownState?: string | null
    godownPostalCode?: string | null
    godownContactPerson?: string | null
    godownContactMobile?: string | null
    referenceName1?: string | null
    referencePhone1?: string | null
    referenceDetails1?: string | null
    referenceName2?: string | null
    referencePhone2?: string | null
    referenceDetails2?: string | null
    legacyRegistrations?: LegacyRegistrationCreateNestedManyWithoutSubmissionInput
    legacyBlob?: LegacyBlobCreateNestedOneWithoutSubmissionInput
  }

  export type FormSubmissionUncheckedCreateInput = {
    id?: string
    legacyId?: number | null
    formType: string
    skPassportNo?: string | null
    skPassportSeq?: bigint | number | null
    validationOtpGenerated?: string | null
    title?: string | null
    age?: string | null
    sameAsAbove?: boolean | null
    remarks?: string | null
    validationCode?: string | null
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
    reporting_manager_name?: string | null
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
    panProofPath?: string | null
    panProofData?: string | null
    dealershipName?: string | null
    contactPerson?: string | null
    gstNumber?: string | null
    panNumber?: string | null
    ownerSameAsAbove?: boolean | null
    ownerTitle?: string | null
    ownerFirstName?: string | null
    ownerLastName?: string | null
    ownerOfficeAddressLine1?: string | null
    ownerOfficeAddressLine2?: string | null
    ownerCity?: string | null
    ownerState?: string | null
    ownerPostalCode?: string | null
    ownerPlace?: string | null
    ownerPhoneNumber?: string | null
    ownerEmailId?: string | null
    secondContactTitle?: string | null
    secondContactFirstName?: string | null
    secondContactLastName?: string | null
    secondContactPhone?: string | null
    secondContactEmail?: string | null
    spouseName?: string | null
    spouseDob?: string | null
    weddingDay?: string | null
    childName1?: string | null
    childDob1?: string | null
    childName2?: string | null
    childDob2?: string | null
    childName3?: string | null
    childDob3?: string | null
    godownSameAsCompany?: boolean | null
    godownAddressLine1?: string | null
    godownAddressLine2?: string | null
    godownCity?: string | null
    godownState?: string | null
    godownPostalCode?: string | null
    godownContactPerson?: string | null
    godownContactMobile?: string | null
    referenceName1?: string | null
    referencePhone1?: string | null
    referenceDetails1?: string | null
    referenceName2?: string | null
    referencePhone2?: string | null
    referenceDetails2?: string | null
    legacyRegistrations?: LegacyRegistrationUncheckedCreateNestedManyWithoutSubmissionInput
    legacyBlob?: LegacyBlobUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type FormSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    formType?: StringFieldUpdateOperationsInput | string
    skPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    skPassportSeq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    validationOtpGenerated?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    sameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    validationCode?: NullableStringFieldUpdateOperationsInput | string | null
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
    reporting_manager_name?: NullableStringFieldUpdateOperationsInput | string | null
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
    panProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    panProofData?: NullableStringFieldUpdateOperationsInput | string | null
    dealershipName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerSameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    ownerCity?: NullableStringFieldUpdateOperationsInput | string | null
    ownerState?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPlace?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmailId?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    spouseDob?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDay?: NullableStringFieldUpdateOperationsInput | string | null
    childName1?: NullableStringFieldUpdateOperationsInput | string | null
    childDob1?: NullableStringFieldUpdateOperationsInput | string | null
    childName2?: NullableStringFieldUpdateOperationsInput | string | null
    childDob2?: NullableStringFieldUpdateOperationsInput | string | null
    childName3?: NullableStringFieldUpdateOperationsInput | string | null
    childDob3?: NullableStringFieldUpdateOperationsInput | string | null
    godownSameAsCompany?: NullableBoolFieldUpdateOperationsInput | boolean | null
    godownAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    godownAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    godownCity?: NullableStringFieldUpdateOperationsInput | string | null
    godownState?: NullableStringFieldUpdateOperationsInput | string | null
    godownPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactMobile?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName1?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName2?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone2?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails2?: NullableStringFieldUpdateOperationsInput | string | null
    legacyRegistrations?: LegacyRegistrationUpdateManyWithoutSubmissionNestedInput
    legacyBlob?: LegacyBlobUpdateOneWithoutSubmissionNestedInput
  }

  export type FormSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    formType?: StringFieldUpdateOperationsInput | string
    skPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    skPassportSeq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    validationOtpGenerated?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    sameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    validationCode?: NullableStringFieldUpdateOperationsInput | string | null
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
    reporting_manager_name?: NullableStringFieldUpdateOperationsInput | string | null
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
    panProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    panProofData?: NullableStringFieldUpdateOperationsInput | string | null
    dealershipName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerSameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    ownerCity?: NullableStringFieldUpdateOperationsInput | string | null
    ownerState?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPlace?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmailId?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    spouseDob?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDay?: NullableStringFieldUpdateOperationsInput | string | null
    childName1?: NullableStringFieldUpdateOperationsInput | string | null
    childDob1?: NullableStringFieldUpdateOperationsInput | string | null
    childName2?: NullableStringFieldUpdateOperationsInput | string | null
    childDob2?: NullableStringFieldUpdateOperationsInput | string | null
    childName3?: NullableStringFieldUpdateOperationsInput | string | null
    childDob3?: NullableStringFieldUpdateOperationsInput | string | null
    godownSameAsCompany?: NullableBoolFieldUpdateOperationsInput | boolean | null
    godownAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    godownAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    godownCity?: NullableStringFieldUpdateOperationsInput | string | null
    godownState?: NullableStringFieldUpdateOperationsInput | string | null
    godownPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactMobile?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName1?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName2?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone2?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails2?: NullableStringFieldUpdateOperationsInput | string | null
    legacyRegistrations?: LegacyRegistrationUncheckedUpdateManyWithoutSubmissionNestedInput
    legacyBlob?: LegacyBlobUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type FormSubmissionCreateManyInput = {
    id?: string
    legacyId?: number | null
    formType: string
    skPassportNo?: string | null
    skPassportSeq?: bigint | number | null
    validationOtpGenerated?: string | null
    title?: string | null
    age?: string | null
    sameAsAbove?: boolean | null
    remarks?: string | null
    validationCode?: string | null
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
    reporting_manager_name?: string | null
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
    panProofPath?: string | null
    panProofData?: string | null
    dealershipName?: string | null
    contactPerson?: string | null
    gstNumber?: string | null
    panNumber?: string | null
    ownerSameAsAbove?: boolean | null
    ownerTitle?: string | null
    ownerFirstName?: string | null
    ownerLastName?: string | null
    ownerOfficeAddressLine1?: string | null
    ownerOfficeAddressLine2?: string | null
    ownerCity?: string | null
    ownerState?: string | null
    ownerPostalCode?: string | null
    ownerPlace?: string | null
    ownerPhoneNumber?: string | null
    ownerEmailId?: string | null
    secondContactTitle?: string | null
    secondContactFirstName?: string | null
    secondContactLastName?: string | null
    secondContactPhone?: string | null
    secondContactEmail?: string | null
    spouseName?: string | null
    spouseDob?: string | null
    weddingDay?: string | null
    childName1?: string | null
    childDob1?: string | null
    childName2?: string | null
    childDob2?: string | null
    childName3?: string | null
    childDob3?: string | null
    godownSameAsCompany?: boolean | null
    godownAddressLine1?: string | null
    godownAddressLine2?: string | null
    godownCity?: string | null
    godownState?: string | null
    godownPostalCode?: string | null
    godownContactPerson?: string | null
    godownContactMobile?: string | null
    referenceName1?: string | null
    referencePhone1?: string | null
    referenceDetails1?: string | null
    referenceName2?: string | null
    referencePhone2?: string | null
    referenceDetails2?: string | null
  }

  export type FormSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    formType?: StringFieldUpdateOperationsInput | string
    skPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    skPassportSeq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    validationOtpGenerated?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    sameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    validationCode?: NullableStringFieldUpdateOperationsInput | string | null
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
    reporting_manager_name?: NullableStringFieldUpdateOperationsInput | string | null
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
    panProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    panProofData?: NullableStringFieldUpdateOperationsInput | string | null
    dealershipName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerSameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    ownerCity?: NullableStringFieldUpdateOperationsInput | string | null
    ownerState?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPlace?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmailId?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    spouseDob?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDay?: NullableStringFieldUpdateOperationsInput | string | null
    childName1?: NullableStringFieldUpdateOperationsInput | string | null
    childDob1?: NullableStringFieldUpdateOperationsInput | string | null
    childName2?: NullableStringFieldUpdateOperationsInput | string | null
    childDob2?: NullableStringFieldUpdateOperationsInput | string | null
    childName3?: NullableStringFieldUpdateOperationsInput | string | null
    childDob3?: NullableStringFieldUpdateOperationsInput | string | null
    godownSameAsCompany?: NullableBoolFieldUpdateOperationsInput | boolean | null
    godownAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    godownAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    godownCity?: NullableStringFieldUpdateOperationsInput | string | null
    godownState?: NullableStringFieldUpdateOperationsInput | string | null
    godownPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactMobile?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName1?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName2?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone2?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    formType?: StringFieldUpdateOperationsInput | string
    skPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    skPassportSeq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    validationOtpGenerated?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    sameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    validationCode?: NullableStringFieldUpdateOperationsInput | string | null
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
    reporting_manager_name?: NullableStringFieldUpdateOperationsInput | string | null
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
    panProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    panProofData?: NullableStringFieldUpdateOperationsInput | string | null
    dealershipName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerSameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    ownerCity?: NullableStringFieldUpdateOperationsInput | string | null
    ownerState?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPlace?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmailId?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    spouseDob?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDay?: NullableStringFieldUpdateOperationsInput | string | null
    childName1?: NullableStringFieldUpdateOperationsInput | string | null
    childDob1?: NullableStringFieldUpdateOperationsInput | string | null
    childName2?: NullableStringFieldUpdateOperationsInput | string | null
    childDob2?: NullableStringFieldUpdateOperationsInput | string | null
    childName3?: NullableStringFieldUpdateOperationsInput | string | null
    childDob3?: NullableStringFieldUpdateOperationsInput | string | null
    godownSameAsCompany?: NullableBoolFieldUpdateOperationsInput | boolean | null
    godownAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    godownAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    godownCity?: NullableStringFieldUpdateOperationsInput | string | null
    godownState?: NullableStringFieldUpdateOperationsInput | string | null
    godownPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactMobile?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName1?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName2?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone2?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LegacyRegistrationCreateInput = {
    id?: string
    legacySource: string
    legacyRowIndex: number
    legacyId?: number | null
    legacyPassportNo?: string | null
    rawTableRecord?: NullableJsonNullValueInput | InputJsonValue
    rawDetailRecord?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submission?: FormSubmissionCreateNestedOneWithoutLegacyRegistrationsInput
  }

  export type LegacyRegistrationUncheckedCreateInput = {
    id?: string
    legacySource: string
    legacyRowIndex: number
    legacyId?: number | null
    legacyPassportNo?: string | null
    rawTableRecord?: NullableJsonNullValueInput | InputJsonValue
    rawDetailRecord?: NullableJsonNullValueInput | InputJsonValue
    submissionId?: string | null
    createdAt?: Date | string
  }

  export type LegacyRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacySource?: StringFieldUpdateOperationsInput | string
    legacyRowIndex?: IntFieldUpdateOperationsInput | number
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    legacyPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    rawTableRecord?: NullableJsonNullValueInput | InputJsonValue
    rawDetailRecord?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: FormSubmissionUpdateOneWithoutLegacyRegistrationsNestedInput
  }

  export type LegacyRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacySource?: StringFieldUpdateOperationsInput | string
    legacyRowIndex?: IntFieldUpdateOperationsInput | number
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    legacyPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    rawTableRecord?: NullableJsonNullValueInput | InputJsonValue
    rawDetailRecord?: NullableJsonNullValueInput | InputJsonValue
    submissionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegacyRegistrationCreateManyInput = {
    id?: string
    legacySource: string
    legacyRowIndex: number
    legacyId?: number | null
    legacyPassportNo?: string | null
    rawTableRecord?: NullableJsonNullValueInput | InputJsonValue
    rawDetailRecord?: NullableJsonNullValueInput | InputJsonValue
    submissionId?: string | null
    createdAt?: Date | string
  }

  export type LegacyRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacySource?: StringFieldUpdateOperationsInput | string
    legacyRowIndex?: IntFieldUpdateOperationsInput | number
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    legacyPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    rawTableRecord?: NullableJsonNullValueInput | InputJsonValue
    rawDetailRecord?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegacyRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacySource?: StringFieldUpdateOperationsInput | string
    legacyRowIndex?: IntFieldUpdateOperationsInput | number
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    legacyPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    rawTableRecord?: NullableJsonNullValueInput | InputJsonValue
    rawDetailRecord?: NullableJsonNullValueInput | InputJsonValue
    submissionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegacyBlobCreateInput = {
    id?: string
    photoProofData?: string | null
    idProofData?: string | null
    idProofBackData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission: FormSubmissionCreateNestedOneWithoutLegacyBlobInput
  }

  export type LegacyBlobUncheckedCreateInput = {
    id?: string
    submissionId: string
    photoProofData?: string | null
    idProofData?: string | null
    idProofBackData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegacyBlobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: FormSubmissionUpdateOneRequiredWithoutLegacyBlobNestedInput
  }

  export type LegacyBlobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    photoProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegacyBlobCreateManyInput = {
    id?: string
    submissionId: string
    photoProofData?: string | null
    idProofData?: string | null
    idProofBackData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegacyBlobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegacyBlobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    photoProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassportCounterCreateInput = {
    key: string
    lastIssued?: bigint | number
    updatedAt?: Date | string
  }

  export type PassportCounterUncheckedCreateInput = {
    key: string
    lastIssued?: bigint | number
    updatedAt?: Date | string
  }

  export type PassportCounterUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    lastIssued?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassportCounterUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    lastIssued?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassportCounterCreateManyInput = {
    key: string
    lastIssued?: bigint | number
    updatedAt?: Date | string
  }

  export type PassportCounterUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    lastIssued?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassportCounterUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    lastIssued?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOfficerCreateInput = {
    id?: string
    name: string
    nameNormalized: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOfficerUncheckedCreateInput = {
    id?: string
    name: string
    nameNormalized: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOfficerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameNormalized?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOfficerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameNormalized?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOfficerCreateManyInput = {
    id?: string
    name: string
    nameNormalized: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOfficerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameNormalized?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOfficerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameNormalized?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportingManagerCreateInput = {
    id?: string
    name: string
    nameNormalized: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportingManagerUncheckedCreateInput = {
    id?: string
    name: string
    nameNormalized: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportingManagerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameNormalized?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportingManagerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameNormalized?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportingManagerCreateManyInput = {
    id?: string
    name: string
    nameNormalized: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportingManagerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameNormalized?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportingManagerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameNormalized?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPriceCreateInput = {
    key: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalPriceUncheckedCreateInput = {
    key: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalPriceUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPriceUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPriceCreateManyInput = {
    key: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalPriceUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPriceUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type LegacyRegistrationListRelationFilter = {
    every?: LegacyRegistrationWhereInput
    some?: LegacyRegistrationWhereInput
    none?: LegacyRegistrationWhereInput
  }

  export type LegacyBlobNullableScalarRelationFilter = {
    is?: LegacyBlobWhereInput | null
    isNot?: LegacyBlobWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LegacyRegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    legacyId?: SortOrder
    formType?: SortOrder
    skPassportNo?: SortOrder
    skPassportSeq?: SortOrder
    validationOtpGenerated?: SortOrder
    title?: SortOrder
    age?: SortOrder
    sameAsAbove?: SortOrder
    remarks?: SortOrder
    validationCode?: SortOrder
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
    reporting_manager_name?: SortOrder
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
    panProofPath?: SortOrder
    panProofData?: SortOrder
    dealershipName?: SortOrder
    contactPerson?: SortOrder
    gstNumber?: SortOrder
    panNumber?: SortOrder
    ownerSameAsAbove?: SortOrder
    ownerTitle?: SortOrder
    ownerFirstName?: SortOrder
    ownerLastName?: SortOrder
    ownerOfficeAddressLine1?: SortOrder
    ownerOfficeAddressLine2?: SortOrder
    ownerCity?: SortOrder
    ownerState?: SortOrder
    ownerPostalCode?: SortOrder
    ownerPlace?: SortOrder
    ownerPhoneNumber?: SortOrder
    ownerEmailId?: SortOrder
    secondContactTitle?: SortOrder
    secondContactFirstName?: SortOrder
    secondContactLastName?: SortOrder
    secondContactPhone?: SortOrder
    secondContactEmail?: SortOrder
    spouseName?: SortOrder
    spouseDob?: SortOrder
    weddingDay?: SortOrder
    childName1?: SortOrder
    childDob1?: SortOrder
    childName2?: SortOrder
    childDob2?: SortOrder
    childName3?: SortOrder
    childDob3?: SortOrder
    godownSameAsCompany?: SortOrder
    godownAddressLine1?: SortOrder
    godownAddressLine2?: SortOrder
    godownCity?: SortOrder
    godownState?: SortOrder
    godownPostalCode?: SortOrder
    godownContactPerson?: SortOrder
    godownContactMobile?: SortOrder
    referenceName1?: SortOrder
    referencePhone1?: SortOrder
    referenceDetails1?: SortOrder
    referenceName2?: SortOrder
    referencePhone2?: SortOrder
    referenceDetails2?: SortOrder
  }

  export type FormSubmissionAvgOrderByAggregateInput = {
    legacyId?: SortOrder
    skPassportSeq?: SortOrder
  }

  export type FormSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    legacyId?: SortOrder
    formType?: SortOrder
    skPassportNo?: SortOrder
    skPassportSeq?: SortOrder
    validationOtpGenerated?: SortOrder
    title?: SortOrder
    age?: SortOrder
    sameAsAbove?: SortOrder
    remarks?: SortOrder
    validationCode?: SortOrder
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
    reporting_manager_name?: SortOrder
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
    panProofPath?: SortOrder
    panProofData?: SortOrder
    dealershipName?: SortOrder
    contactPerson?: SortOrder
    gstNumber?: SortOrder
    panNumber?: SortOrder
    ownerSameAsAbove?: SortOrder
    ownerTitle?: SortOrder
    ownerFirstName?: SortOrder
    ownerLastName?: SortOrder
    ownerOfficeAddressLine1?: SortOrder
    ownerOfficeAddressLine2?: SortOrder
    ownerCity?: SortOrder
    ownerState?: SortOrder
    ownerPostalCode?: SortOrder
    ownerPlace?: SortOrder
    ownerPhoneNumber?: SortOrder
    ownerEmailId?: SortOrder
    secondContactTitle?: SortOrder
    secondContactFirstName?: SortOrder
    secondContactLastName?: SortOrder
    secondContactPhone?: SortOrder
    secondContactEmail?: SortOrder
    spouseName?: SortOrder
    spouseDob?: SortOrder
    weddingDay?: SortOrder
    childName1?: SortOrder
    childDob1?: SortOrder
    childName2?: SortOrder
    childDob2?: SortOrder
    childName3?: SortOrder
    childDob3?: SortOrder
    godownSameAsCompany?: SortOrder
    godownAddressLine1?: SortOrder
    godownAddressLine2?: SortOrder
    godownCity?: SortOrder
    godownState?: SortOrder
    godownPostalCode?: SortOrder
    godownContactPerson?: SortOrder
    godownContactMobile?: SortOrder
    referenceName1?: SortOrder
    referencePhone1?: SortOrder
    referenceDetails1?: SortOrder
    referenceName2?: SortOrder
    referencePhone2?: SortOrder
    referenceDetails2?: SortOrder
  }

  export type FormSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    legacyId?: SortOrder
    formType?: SortOrder
    skPassportNo?: SortOrder
    skPassportSeq?: SortOrder
    validationOtpGenerated?: SortOrder
    title?: SortOrder
    age?: SortOrder
    sameAsAbove?: SortOrder
    remarks?: SortOrder
    validationCode?: SortOrder
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
    reporting_manager_name?: SortOrder
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
    panProofPath?: SortOrder
    panProofData?: SortOrder
    dealershipName?: SortOrder
    contactPerson?: SortOrder
    gstNumber?: SortOrder
    panNumber?: SortOrder
    ownerSameAsAbove?: SortOrder
    ownerTitle?: SortOrder
    ownerFirstName?: SortOrder
    ownerLastName?: SortOrder
    ownerOfficeAddressLine1?: SortOrder
    ownerOfficeAddressLine2?: SortOrder
    ownerCity?: SortOrder
    ownerState?: SortOrder
    ownerPostalCode?: SortOrder
    ownerPlace?: SortOrder
    ownerPhoneNumber?: SortOrder
    ownerEmailId?: SortOrder
    secondContactTitle?: SortOrder
    secondContactFirstName?: SortOrder
    secondContactLastName?: SortOrder
    secondContactPhone?: SortOrder
    secondContactEmail?: SortOrder
    spouseName?: SortOrder
    spouseDob?: SortOrder
    weddingDay?: SortOrder
    childName1?: SortOrder
    childDob1?: SortOrder
    childName2?: SortOrder
    childDob2?: SortOrder
    childName3?: SortOrder
    childDob3?: SortOrder
    godownSameAsCompany?: SortOrder
    godownAddressLine1?: SortOrder
    godownAddressLine2?: SortOrder
    godownCity?: SortOrder
    godownState?: SortOrder
    godownPostalCode?: SortOrder
    godownContactPerson?: SortOrder
    godownContactMobile?: SortOrder
    referenceName1?: SortOrder
    referencePhone1?: SortOrder
    referenceDetails1?: SortOrder
    referenceName2?: SortOrder
    referencePhone2?: SortOrder
    referenceDetails2?: SortOrder
  }

  export type FormSubmissionSumOrderByAggregateInput = {
    legacyId?: SortOrder
    skPassportSeq?: SortOrder
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FormSubmissionNullableScalarRelationFilter = {
    is?: FormSubmissionWhereInput | null
    isNot?: FormSubmissionWhereInput | null
  }

  export type LegacyRegistrationLegacySourceLegacyRowIndexCompoundUniqueInput = {
    legacySource: string
    legacyRowIndex: number
  }

  export type LegacyRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    legacySource?: SortOrder
    legacyRowIndex?: SortOrder
    legacyId?: SortOrder
    legacyPassportNo?: SortOrder
    rawTableRecord?: SortOrder
    rawDetailRecord?: SortOrder
    submissionId?: SortOrder
    createdAt?: SortOrder
  }

  export type LegacyRegistrationAvgOrderByAggregateInput = {
    legacyRowIndex?: SortOrder
    legacyId?: SortOrder
  }

  export type LegacyRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    legacySource?: SortOrder
    legacyRowIndex?: SortOrder
    legacyId?: SortOrder
    legacyPassportNo?: SortOrder
    submissionId?: SortOrder
    createdAt?: SortOrder
  }

  export type LegacyRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    legacySource?: SortOrder
    legacyRowIndex?: SortOrder
    legacyId?: SortOrder
    legacyPassportNo?: SortOrder
    submissionId?: SortOrder
    createdAt?: SortOrder
  }

  export type LegacyRegistrationSumOrderByAggregateInput = {
    legacyRowIndex?: SortOrder
    legacyId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FormSubmissionScalarRelationFilter = {
    is?: FormSubmissionWhereInput
    isNot?: FormSubmissionWhereInput
  }

  export type LegacyBlobCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    photoProofData?: SortOrder
    idProofData?: SortOrder
    idProofBackData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegacyBlobMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    photoProofData?: SortOrder
    idProofData?: SortOrder
    idProofBackData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegacyBlobMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    photoProofData?: SortOrder
    idProofData?: SortOrder
    idProofBackData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type PassportCounterCountOrderByAggregateInput = {
    key?: SortOrder
    lastIssued?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassportCounterAvgOrderByAggregateInput = {
    lastIssued?: SortOrder
  }

  export type PassportCounterMaxOrderByAggregateInput = {
    key?: SortOrder
    lastIssued?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassportCounterMinOrderByAggregateInput = {
    key?: SortOrder
    lastIssued?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassportCounterSumOrderByAggregateInput = {
    lastIssued?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type SalesOfficerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameNormalized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOfficerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameNormalized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOfficerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameNormalized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportingManagerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameNormalized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportingManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameNormalized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportingManagerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameNormalized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPriceCountOrderByAggregateInput = {
    key?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPriceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type GlobalPriceMaxOrderByAggregateInput = {
    key?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPriceMinOrderByAggregateInput = {
    key?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPriceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LegacyRegistrationCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<LegacyRegistrationCreateWithoutSubmissionInput, LegacyRegistrationUncheckedCreateWithoutSubmissionInput> | LegacyRegistrationCreateWithoutSubmissionInput[] | LegacyRegistrationUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: LegacyRegistrationCreateOrConnectWithoutSubmissionInput | LegacyRegistrationCreateOrConnectWithoutSubmissionInput[]
    createMany?: LegacyRegistrationCreateManySubmissionInputEnvelope
    connect?: LegacyRegistrationWhereUniqueInput | LegacyRegistrationWhereUniqueInput[]
  }

  export type LegacyBlobCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<LegacyBlobCreateWithoutSubmissionInput, LegacyBlobUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: LegacyBlobCreateOrConnectWithoutSubmissionInput
    connect?: LegacyBlobWhereUniqueInput
  }

  export type LegacyRegistrationUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<LegacyRegistrationCreateWithoutSubmissionInput, LegacyRegistrationUncheckedCreateWithoutSubmissionInput> | LegacyRegistrationCreateWithoutSubmissionInput[] | LegacyRegistrationUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: LegacyRegistrationCreateOrConnectWithoutSubmissionInput | LegacyRegistrationCreateOrConnectWithoutSubmissionInput[]
    createMany?: LegacyRegistrationCreateManySubmissionInputEnvelope
    connect?: LegacyRegistrationWhereUniqueInput | LegacyRegistrationWhereUniqueInput[]
  }

  export type LegacyBlobUncheckedCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<LegacyBlobCreateWithoutSubmissionInput, LegacyBlobUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: LegacyBlobCreateOrConnectWithoutSubmissionInput
    connect?: LegacyBlobWhereUniqueInput
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

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LegacyRegistrationUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<LegacyRegistrationCreateWithoutSubmissionInput, LegacyRegistrationUncheckedCreateWithoutSubmissionInput> | LegacyRegistrationCreateWithoutSubmissionInput[] | LegacyRegistrationUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: LegacyRegistrationCreateOrConnectWithoutSubmissionInput | LegacyRegistrationCreateOrConnectWithoutSubmissionInput[]
    upsert?: LegacyRegistrationUpsertWithWhereUniqueWithoutSubmissionInput | LegacyRegistrationUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: LegacyRegistrationCreateManySubmissionInputEnvelope
    set?: LegacyRegistrationWhereUniqueInput | LegacyRegistrationWhereUniqueInput[]
    disconnect?: LegacyRegistrationWhereUniqueInput | LegacyRegistrationWhereUniqueInput[]
    delete?: LegacyRegistrationWhereUniqueInput | LegacyRegistrationWhereUniqueInput[]
    connect?: LegacyRegistrationWhereUniqueInput | LegacyRegistrationWhereUniqueInput[]
    update?: LegacyRegistrationUpdateWithWhereUniqueWithoutSubmissionInput | LegacyRegistrationUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: LegacyRegistrationUpdateManyWithWhereWithoutSubmissionInput | LegacyRegistrationUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: LegacyRegistrationScalarWhereInput | LegacyRegistrationScalarWhereInput[]
  }

  export type LegacyBlobUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<LegacyBlobCreateWithoutSubmissionInput, LegacyBlobUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: LegacyBlobCreateOrConnectWithoutSubmissionInput
    upsert?: LegacyBlobUpsertWithoutSubmissionInput
    disconnect?: LegacyBlobWhereInput | boolean
    delete?: LegacyBlobWhereInput | boolean
    connect?: LegacyBlobWhereUniqueInput
    update?: XOR<XOR<LegacyBlobUpdateToOneWithWhereWithoutSubmissionInput, LegacyBlobUpdateWithoutSubmissionInput>, LegacyBlobUncheckedUpdateWithoutSubmissionInput>
  }

  export type LegacyRegistrationUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<LegacyRegistrationCreateWithoutSubmissionInput, LegacyRegistrationUncheckedCreateWithoutSubmissionInput> | LegacyRegistrationCreateWithoutSubmissionInput[] | LegacyRegistrationUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: LegacyRegistrationCreateOrConnectWithoutSubmissionInput | LegacyRegistrationCreateOrConnectWithoutSubmissionInput[]
    upsert?: LegacyRegistrationUpsertWithWhereUniqueWithoutSubmissionInput | LegacyRegistrationUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: LegacyRegistrationCreateManySubmissionInputEnvelope
    set?: LegacyRegistrationWhereUniqueInput | LegacyRegistrationWhereUniqueInput[]
    disconnect?: LegacyRegistrationWhereUniqueInput | LegacyRegistrationWhereUniqueInput[]
    delete?: LegacyRegistrationWhereUniqueInput | LegacyRegistrationWhereUniqueInput[]
    connect?: LegacyRegistrationWhereUniqueInput | LegacyRegistrationWhereUniqueInput[]
    update?: LegacyRegistrationUpdateWithWhereUniqueWithoutSubmissionInput | LegacyRegistrationUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: LegacyRegistrationUpdateManyWithWhereWithoutSubmissionInput | LegacyRegistrationUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: LegacyRegistrationScalarWhereInput | LegacyRegistrationScalarWhereInput[]
  }

  export type LegacyBlobUncheckedUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<LegacyBlobCreateWithoutSubmissionInput, LegacyBlobUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: LegacyBlobCreateOrConnectWithoutSubmissionInput
    upsert?: LegacyBlobUpsertWithoutSubmissionInput
    disconnect?: LegacyBlobWhereInput | boolean
    delete?: LegacyBlobWhereInput | boolean
    connect?: LegacyBlobWhereUniqueInput
    update?: XOR<XOR<LegacyBlobUpdateToOneWithWhereWithoutSubmissionInput, LegacyBlobUpdateWithoutSubmissionInput>, LegacyBlobUncheckedUpdateWithoutSubmissionInput>
  }

  export type FormSubmissionCreateNestedOneWithoutLegacyRegistrationsInput = {
    create?: XOR<FormSubmissionCreateWithoutLegacyRegistrationsInput, FormSubmissionUncheckedCreateWithoutLegacyRegistrationsInput>
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutLegacyRegistrationsInput
    connect?: FormSubmissionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FormSubmissionUpdateOneWithoutLegacyRegistrationsNestedInput = {
    create?: XOR<FormSubmissionCreateWithoutLegacyRegistrationsInput, FormSubmissionUncheckedCreateWithoutLegacyRegistrationsInput>
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutLegacyRegistrationsInput
    upsert?: FormSubmissionUpsertWithoutLegacyRegistrationsInput
    disconnect?: FormSubmissionWhereInput | boolean
    delete?: FormSubmissionWhereInput | boolean
    connect?: FormSubmissionWhereUniqueInput
    update?: XOR<XOR<FormSubmissionUpdateToOneWithWhereWithoutLegacyRegistrationsInput, FormSubmissionUpdateWithoutLegacyRegistrationsInput>, FormSubmissionUncheckedUpdateWithoutLegacyRegistrationsInput>
  }

  export type FormSubmissionCreateNestedOneWithoutLegacyBlobInput = {
    create?: XOR<FormSubmissionCreateWithoutLegacyBlobInput, FormSubmissionUncheckedCreateWithoutLegacyBlobInput>
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutLegacyBlobInput
    connect?: FormSubmissionWhereUniqueInput
  }

  export type FormSubmissionUpdateOneRequiredWithoutLegacyBlobNestedInput = {
    create?: XOR<FormSubmissionCreateWithoutLegacyBlobInput, FormSubmissionUncheckedCreateWithoutLegacyBlobInput>
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutLegacyBlobInput
    upsert?: FormSubmissionUpsertWithoutLegacyBlobInput
    connect?: FormSubmissionWhereUniqueInput
    update?: XOR<XOR<FormSubmissionUpdateToOneWithWhereWithoutLegacyBlobInput, FormSubmissionUpdateWithoutLegacyBlobInput>, FormSubmissionUncheckedUpdateWithoutLegacyBlobInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type LegacyRegistrationCreateWithoutSubmissionInput = {
    id?: string
    legacySource: string
    legacyRowIndex: number
    legacyId?: number | null
    legacyPassportNo?: string | null
    rawTableRecord?: NullableJsonNullValueInput | InputJsonValue
    rawDetailRecord?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LegacyRegistrationUncheckedCreateWithoutSubmissionInput = {
    id?: string
    legacySource: string
    legacyRowIndex: number
    legacyId?: number | null
    legacyPassportNo?: string | null
    rawTableRecord?: NullableJsonNullValueInput | InputJsonValue
    rawDetailRecord?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LegacyRegistrationCreateOrConnectWithoutSubmissionInput = {
    where: LegacyRegistrationWhereUniqueInput
    create: XOR<LegacyRegistrationCreateWithoutSubmissionInput, LegacyRegistrationUncheckedCreateWithoutSubmissionInput>
  }

  export type LegacyRegistrationCreateManySubmissionInputEnvelope = {
    data: LegacyRegistrationCreateManySubmissionInput | LegacyRegistrationCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type LegacyBlobCreateWithoutSubmissionInput = {
    id?: string
    photoProofData?: string | null
    idProofData?: string | null
    idProofBackData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegacyBlobUncheckedCreateWithoutSubmissionInput = {
    id?: string
    photoProofData?: string | null
    idProofData?: string | null
    idProofBackData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegacyBlobCreateOrConnectWithoutSubmissionInput = {
    where: LegacyBlobWhereUniqueInput
    create: XOR<LegacyBlobCreateWithoutSubmissionInput, LegacyBlobUncheckedCreateWithoutSubmissionInput>
  }

  export type LegacyRegistrationUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: LegacyRegistrationWhereUniqueInput
    update: XOR<LegacyRegistrationUpdateWithoutSubmissionInput, LegacyRegistrationUncheckedUpdateWithoutSubmissionInput>
    create: XOR<LegacyRegistrationCreateWithoutSubmissionInput, LegacyRegistrationUncheckedCreateWithoutSubmissionInput>
  }

  export type LegacyRegistrationUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: LegacyRegistrationWhereUniqueInput
    data: XOR<LegacyRegistrationUpdateWithoutSubmissionInput, LegacyRegistrationUncheckedUpdateWithoutSubmissionInput>
  }

  export type LegacyRegistrationUpdateManyWithWhereWithoutSubmissionInput = {
    where: LegacyRegistrationScalarWhereInput
    data: XOR<LegacyRegistrationUpdateManyMutationInput, LegacyRegistrationUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type LegacyRegistrationScalarWhereInput = {
    AND?: LegacyRegistrationScalarWhereInput | LegacyRegistrationScalarWhereInput[]
    OR?: LegacyRegistrationScalarWhereInput[]
    NOT?: LegacyRegistrationScalarWhereInput | LegacyRegistrationScalarWhereInput[]
    id?: StringFilter<"LegacyRegistration"> | string
    legacySource?: StringFilter<"LegacyRegistration"> | string
    legacyRowIndex?: IntFilter<"LegacyRegistration"> | number
    legacyId?: IntNullableFilter<"LegacyRegistration"> | number | null
    legacyPassportNo?: StringNullableFilter<"LegacyRegistration"> | string | null
    rawTableRecord?: JsonNullableFilter<"LegacyRegistration">
    rawDetailRecord?: JsonNullableFilter<"LegacyRegistration">
    submissionId?: StringNullableFilter<"LegacyRegistration"> | string | null
    createdAt?: DateTimeFilter<"LegacyRegistration"> | Date | string
  }

  export type LegacyBlobUpsertWithoutSubmissionInput = {
    update: XOR<LegacyBlobUpdateWithoutSubmissionInput, LegacyBlobUncheckedUpdateWithoutSubmissionInput>
    create: XOR<LegacyBlobCreateWithoutSubmissionInput, LegacyBlobUncheckedCreateWithoutSubmissionInput>
    where?: LegacyBlobWhereInput
  }

  export type LegacyBlobUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: LegacyBlobWhereInput
    data: XOR<LegacyBlobUpdateWithoutSubmissionInput, LegacyBlobUncheckedUpdateWithoutSubmissionInput>
  }

  export type LegacyBlobUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegacyBlobUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofData?: NullableStringFieldUpdateOperationsInput | string | null
    idProofBackData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionCreateWithoutLegacyRegistrationsInput = {
    id?: string
    legacyId?: number | null
    formType: string
    skPassportNo?: string | null
    skPassportSeq?: bigint | number | null
    validationOtpGenerated?: string | null
    title?: string | null
    age?: string | null
    sameAsAbove?: boolean | null
    remarks?: string | null
    validationCode?: string | null
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
    reporting_manager_name?: string | null
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
    panProofPath?: string | null
    panProofData?: string | null
    dealershipName?: string | null
    contactPerson?: string | null
    gstNumber?: string | null
    panNumber?: string | null
    ownerSameAsAbove?: boolean | null
    ownerTitle?: string | null
    ownerFirstName?: string | null
    ownerLastName?: string | null
    ownerOfficeAddressLine1?: string | null
    ownerOfficeAddressLine2?: string | null
    ownerCity?: string | null
    ownerState?: string | null
    ownerPostalCode?: string | null
    ownerPlace?: string | null
    ownerPhoneNumber?: string | null
    ownerEmailId?: string | null
    secondContactTitle?: string | null
    secondContactFirstName?: string | null
    secondContactLastName?: string | null
    secondContactPhone?: string | null
    secondContactEmail?: string | null
    spouseName?: string | null
    spouseDob?: string | null
    weddingDay?: string | null
    childName1?: string | null
    childDob1?: string | null
    childName2?: string | null
    childDob2?: string | null
    childName3?: string | null
    childDob3?: string | null
    godownSameAsCompany?: boolean | null
    godownAddressLine1?: string | null
    godownAddressLine2?: string | null
    godownCity?: string | null
    godownState?: string | null
    godownPostalCode?: string | null
    godownContactPerson?: string | null
    godownContactMobile?: string | null
    referenceName1?: string | null
    referencePhone1?: string | null
    referenceDetails1?: string | null
    referenceName2?: string | null
    referencePhone2?: string | null
    referenceDetails2?: string | null
    legacyBlob?: LegacyBlobCreateNestedOneWithoutSubmissionInput
  }

  export type FormSubmissionUncheckedCreateWithoutLegacyRegistrationsInput = {
    id?: string
    legacyId?: number | null
    formType: string
    skPassportNo?: string | null
    skPassportSeq?: bigint | number | null
    validationOtpGenerated?: string | null
    title?: string | null
    age?: string | null
    sameAsAbove?: boolean | null
    remarks?: string | null
    validationCode?: string | null
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
    reporting_manager_name?: string | null
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
    panProofPath?: string | null
    panProofData?: string | null
    dealershipName?: string | null
    contactPerson?: string | null
    gstNumber?: string | null
    panNumber?: string | null
    ownerSameAsAbove?: boolean | null
    ownerTitle?: string | null
    ownerFirstName?: string | null
    ownerLastName?: string | null
    ownerOfficeAddressLine1?: string | null
    ownerOfficeAddressLine2?: string | null
    ownerCity?: string | null
    ownerState?: string | null
    ownerPostalCode?: string | null
    ownerPlace?: string | null
    ownerPhoneNumber?: string | null
    ownerEmailId?: string | null
    secondContactTitle?: string | null
    secondContactFirstName?: string | null
    secondContactLastName?: string | null
    secondContactPhone?: string | null
    secondContactEmail?: string | null
    spouseName?: string | null
    spouseDob?: string | null
    weddingDay?: string | null
    childName1?: string | null
    childDob1?: string | null
    childName2?: string | null
    childDob2?: string | null
    childName3?: string | null
    childDob3?: string | null
    godownSameAsCompany?: boolean | null
    godownAddressLine1?: string | null
    godownAddressLine2?: string | null
    godownCity?: string | null
    godownState?: string | null
    godownPostalCode?: string | null
    godownContactPerson?: string | null
    godownContactMobile?: string | null
    referenceName1?: string | null
    referencePhone1?: string | null
    referenceDetails1?: string | null
    referenceName2?: string | null
    referencePhone2?: string | null
    referenceDetails2?: string | null
    legacyBlob?: LegacyBlobUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type FormSubmissionCreateOrConnectWithoutLegacyRegistrationsInput = {
    where: FormSubmissionWhereUniqueInput
    create: XOR<FormSubmissionCreateWithoutLegacyRegistrationsInput, FormSubmissionUncheckedCreateWithoutLegacyRegistrationsInput>
  }

  export type FormSubmissionUpsertWithoutLegacyRegistrationsInput = {
    update: XOR<FormSubmissionUpdateWithoutLegacyRegistrationsInput, FormSubmissionUncheckedUpdateWithoutLegacyRegistrationsInput>
    create: XOR<FormSubmissionCreateWithoutLegacyRegistrationsInput, FormSubmissionUncheckedCreateWithoutLegacyRegistrationsInput>
    where?: FormSubmissionWhereInput
  }

  export type FormSubmissionUpdateToOneWithWhereWithoutLegacyRegistrationsInput = {
    where?: FormSubmissionWhereInput
    data: XOR<FormSubmissionUpdateWithoutLegacyRegistrationsInput, FormSubmissionUncheckedUpdateWithoutLegacyRegistrationsInput>
  }

  export type FormSubmissionUpdateWithoutLegacyRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    formType?: StringFieldUpdateOperationsInput | string
    skPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    skPassportSeq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    validationOtpGenerated?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    sameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    validationCode?: NullableStringFieldUpdateOperationsInput | string | null
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
    reporting_manager_name?: NullableStringFieldUpdateOperationsInput | string | null
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
    panProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    panProofData?: NullableStringFieldUpdateOperationsInput | string | null
    dealershipName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerSameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    ownerCity?: NullableStringFieldUpdateOperationsInput | string | null
    ownerState?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPlace?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmailId?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    spouseDob?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDay?: NullableStringFieldUpdateOperationsInput | string | null
    childName1?: NullableStringFieldUpdateOperationsInput | string | null
    childDob1?: NullableStringFieldUpdateOperationsInput | string | null
    childName2?: NullableStringFieldUpdateOperationsInput | string | null
    childDob2?: NullableStringFieldUpdateOperationsInput | string | null
    childName3?: NullableStringFieldUpdateOperationsInput | string | null
    childDob3?: NullableStringFieldUpdateOperationsInput | string | null
    godownSameAsCompany?: NullableBoolFieldUpdateOperationsInput | boolean | null
    godownAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    godownAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    godownCity?: NullableStringFieldUpdateOperationsInput | string | null
    godownState?: NullableStringFieldUpdateOperationsInput | string | null
    godownPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactMobile?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName1?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName2?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone2?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails2?: NullableStringFieldUpdateOperationsInput | string | null
    legacyBlob?: LegacyBlobUpdateOneWithoutSubmissionNestedInput
  }

  export type FormSubmissionUncheckedUpdateWithoutLegacyRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    formType?: StringFieldUpdateOperationsInput | string
    skPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    skPassportSeq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    validationOtpGenerated?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    sameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    validationCode?: NullableStringFieldUpdateOperationsInput | string | null
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
    reporting_manager_name?: NullableStringFieldUpdateOperationsInput | string | null
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
    panProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    panProofData?: NullableStringFieldUpdateOperationsInput | string | null
    dealershipName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerSameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    ownerCity?: NullableStringFieldUpdateOperationsInput | string | null
    ownerState?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPlace?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmailId?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    spouseDob?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDay?: NullableStringFieldUpdateOperationsInput | string | null
    childName1?: NullableStringFieldUpdateOperationsInput | string | null
    childDob1?: NullableStringFieldUpdateOperationsInput | string | null
    childName2?: NullableStringFieldUpdateOperationsInput | string | null
    childDob2?: NullableStringFieldUpdateOperationsInput | string | null
    childName3?: NullableStringFieldUpdateOperationsInput | string | null
    childDob3?: NullableStringFieldUpdateOperationsInput | string | null
    godownSameAsCompany?: NullableBoolFieldUpdateOperationsInput | boolean | null
    godownAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    godownAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    godownCity?: NullableStringFieldUpdateOperationsInput | string | null
    godownState?: NullableStringFieldUpdateOperationsInput | string | null
    godownPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactMobile?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName1?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName2?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone2?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails2?: NullableStringFieldUpdateOperationsInput | string | null
    legacyBlob?: LegacyBlobUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type FormSubmissionCreateWithoutLegacyBlobInput = {
    id?: string
    legacyId?: number | null
    formType: string
    skPassportNo?: string | null
    skPassportSeq?: bigint | number | null
    validationOtpGenerated?: string | null
    title?: string | null
    age?: string | null
    sameAsAbove?: boolean | null
    remarks?: string | null
    validationCode?: string | null
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
    reporting_manager_name?: string | null
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
    panProofPath?: string | null
    panProofData?: string | null
    dealershipName?: string | null
    contactPerson?: string | null
    gstNumber?: string | null
    panNumber?: string | null
    ownerSameAsAbove?: boolean | null
    ownerTitle?: string | null
    ownerFirstName?: string | null
    ownerLastName?: string | null
    ownerOfficeAddressLine1?: string | null
    ownerOfficeAddressLine2?: string | null
    ownerCity?: string | null
    ownerState?: string | null
    ownerPostalCode?: string | null
    ownerPlace?: string | null
    ownerPhoneNumber?: string | null
    ownerEmailId?: string | null
    secondContactTitle?: string | null
    secondContactFirstName?: string | null
    secondContactLastName?: string | null
    secondContactPhone?: string | null
    secondContactEmail?: string | null
    spouseName?: string | null
    spouseDob?: string | null
    weddingDay?: string | null
    childName1?: string | null
    childDob1?: string | null
    childName2?: string | null
    childDob2?: string | null
    childName3?: string | null
    childDob3?: string | null
    godownSameAsCompany?: boolean | null
    godownAddressLine1?: string | null
    godownAddressLine2?: string | null
    godownCity?: string | null
    godownState?: string | null
    godownPostalCode?: string | null
    godownContactPerson?: string | null
    godownContactMobile?: string | null
    referenceName1?: string | null
    referencePhone1?: string | null
    referenceDetails1?: string | null
    referenceName2?: string | null
    referencePhone2?: string | null
    referenceDetails2?: string | null
    legacyRegistrations?: LegacyRegistrationCreateNestedManyWithoutSubmissionInput
  }

  export type FormSubmissionUncheckedCreateWithoutLegacyBlobInput = {
    id?: string
    legacyId?: number | null
    formType: string
    skPassportNo?: string | null
    skPassportSeq?: bigint | number | null
    validationOtpGenerated?: string | null
    title?: string | null
    age?: string | null
    sameAsAbove?: boolean | null
    remarks?: string | null
    validationCode?: string | null
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
    reporting_manager_name?: string | null
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
    panProofPath?: string | null
    panProofData?: string | null
    dealershipName?: string | null
    contactPerson?: string | null
    gstNumber?: string | null
    panNumber?: string | null
    ownerSameAsAbove?: boolean | null
    ownerTitle?: string | null
    ownerFirstName?: string | null
    ownerLastName?: string | null
    ownerOfficeAddressLine1?: string | null
    ownerOfficeAddressLine2?: string | null
    ownerCity?: string | null
    ownerState?: string | null
    ownerPostalCode?: string | null
    ownerPlace?: string | null
    ownerPhoneNumber?: string | null
    ownerEmailId?: string | null
    secondContactTitle?: string | null
    secondContactFirstName?: string | null
    secondContactLastName?: string | null
    secondContactPhone?: string | null
    secondContactEmail?: string | null
    spouseName?: string | null
    spouseDob?: string | null
    weddingDay?: string | null
    childName1?: string | null
    childDob1?: string | null
    childName2?: string | null
    childDob2?: string | null
    childName3?: string | null
    childDob3?: string | null
    godownSameAsCompany?: boolean | null
    godownAddressLine1?: string | null
    godownAddressLine2?: string | null
    godownCity?: string | null
    godownState?: string | null
    godownPostalCode?: string | null
    godownContactPerson?: string | null
    godownContactMobile?: string | null
    referenceName1?: string | null
    referencePhone1?: string | null
    referenceDetails1?: string | null
    referenceName2?: string | null
    referencePhone2?: string | null
    referenceDetails2?: string | null
    legacyRegistrations?: LegacyRegistrationUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type FormSubmissionCreateOrConnectWithoutLegacyBlobInput = {
    where: FormSubmissionWhereUniqueInput
    create: XOR<FormSubmissionCreateWithoutLegacyBlobInput, FormSubmissionUncheckedCreateWithoutLegacyBlobInput>
  }

  export type FormSubmissionUpsertWithoutLegacyBlobInput = {
    update: XOR<FormSubmissionUpdateWithoutLegacyBlobInput, FormSubmissionUncheckedUpdateWithoutLegacyBlobInput>
    create: XOR<FormSubmissionCreateWithoutLegacyBlobInput, FormSubmissionUncheckedCreateWithoutLegacyBlobInput>
    where?: FormSubmissionWhereInput
  }

  export type FormSubmissionUpdateToOneWithWhereWithoutLegacyBlobInput = {
    where?: FormSubmissionWhereInput
    data: XOR<FormSubmissionUpdateWithoutLegacyBlobInput, FormSubmissionUncheckedUpdateWithoutLegacyBlobInput>
  }

  export type FormSubmissionUpdateWithoutLegacyBlobInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    formType?: StringFieldUpdateOperationsInput | string
    skPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    skPassportSeq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    validationOtpGenerated?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    sameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    validationCode?: NullableStringFieldUpdateOperationsInput | string | null
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
    reporting_manager_name?: NullableStringFieldUpdateOperationsInput | string | null
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
    panProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    panProofData?: NullableStringFieldUpdateOperationsInput | string | null
    dealershipName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerSameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    ownerCity?: NullableStringFieldUpdateOperationsInput | string | null
    ownerState?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPlace?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmailId?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    spouseDob?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDay?: NullableStringFieldUpdateOperationsInput | string | null
    childName1?: NullableStringFieldUpdateOperationsInput | string | null
    childDob1?: NullableStringFieldUpdateOperationsInput | string | null
    childName2?: NullableStringFieldUpdateOperationsInput | string | null
    childDob2?: NullableStringFieldUpdateOperationsInput | string | null
    childName3?: NullableStringFieldUpdateOperationsInput | string | null
    childDob3?: NullableStringFieldUpdateOperationsInput | string | null
    godownSameAsCompany?: NullableBoolFieldUpdateOperationsInput | boolean | null
    godownAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    godownAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    godownCity?: NullableStringFieldUpdateOperationsInput | string | null
    godownState?: NullableStringFieldUpdateOperationsInput | string | null
    godownPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactMobile?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName1?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName2?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone2?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails2?: NullableStringFieldUpdateOperationsInput | string | null
    legacyRegistrations?: LegacyRegistrationUpdateManyWithoutSubmissionNestedInput
  }

  export type FormSubmissionUncheckedUpdateWithoutLegacyBlobInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    formType?: StringFieldUpdateOperationsInput | string
    skPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    skPassportSeq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    validationOtpGenerated?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    sameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    validationCode?: NullableStringFieldUpdateOperationsInput | string | null
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
    reporting_manager_name?: NullableStringFieldUpdateOperationsInput | string | null
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
    panProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    panProofData?: NullableStringFieldUpdateOperationsInput | string | null
    dealershipName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerSameAsAbove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ownerFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerLastName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOfficeAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    ownerCity?: NullableStringFieldUpdateOperationsInput | string | null
    ownerState?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPlace?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmailId?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactTitle?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactFirstName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactLastName?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    spouseName?: NullableStringFieldUpdateOperationsInput | string | null
    spouseDob?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDay?: NullableStringFieldUpdateOperationsInput | string | null
    childName1?: NullableStringFieldUpdateOperationsInput | string | null
    childDob1?: NullableStringFieldUpdateOperationsInput | string | null
    childName2?: NullableStringFieldUpdateOperationsInput | string | null
    childDob2?: NullableStringFieldUpdateOperationsInput | string | null
    childName3?: NullableStringFieldUpdateOperationsInput | string | null
    childDob3?: NullableStringFieldUpdateOperationsInput | string | null
    godownSameAsCompany?: NullableBoolFieldUpdateOperationsInput | boolean | null
    godownAddressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    godownAddressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    godownCity?: NullableStringFieldUpdateOperationsInput | string | null
    godownState?: NullableStringFieldUpdateOperationsInput | string | null
    godownPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    godownContactMobile?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName1?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails1?: NullableStringFieldUpdateOperationsInput | string | null
    referenceName2?: NullableStringFieldUpdateOperationsInput | string | null
    referencePhone2?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDetails2?: NullableStringFieldUpdateOperationsInput | string | null
    legacyRegistrations?: LegacyRegistrationUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type LegacyRegistrationCreateManySubmissionInput = {
    id?: string
    legacySource: string
    legacyRowIndex: number
    legacyId?: number | null
    legacyPassportNo?: string | null
    rawTableRecord?: NullableJsonNullValueInput | InputJsonValue
    rawDetailRecord?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LegacyRegistrationUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacySource?: StringFieldUpdateOperationsInput | string
    legacyRowIndex?: IntFieldUpdateOperationsInput | number
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    legacyPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    rawTableRecord?: NullableJsonNullValueInput | InputJsonValue
    rawDetailRecord?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegacyRegistrationUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacySource?: StringFieldUpdateOperationsInput | string
    legacyRowIndex?: IntFieldUpdateOperationsInput | number
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    legacyPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    rawTableRecord?: NullableJsonNullValueInput | InputJsonValue
    rawDetailRecord?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegacyRegistrationUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    legacySource?: StringFieldUpdateOperationsInput | string
    legacyRowIndex?: IntFieldUpdateOperationsInput | number
    legacyId?: NullableIntFieldUpdateOperationsInput | number | null
    legacyPassportNo?: NullableStringFieldUpdateOperationsInput | string | null
    rawTableRecord?: NullableJsonNullValueInput | InputJsonValue
    rawDetailRecord?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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