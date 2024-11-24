export default class UserQuery {
    public static createTableUser = `CREATE TABLE IF NOT EXISTS user(
        code INT NOT NULL AUTO_INCREMENT COMMENT "User code auto increment",
        name VARCHAR(255) NOT NULL COMMENT "User name",
        surname VARCHAR(255) NOT NULL COMMENT "User surname",
        birth_date DATE NOT NULL COMMENT "User birth date",
        sex VARCHAR(1) NOT NULL COMMENT "User sex",
        primary_document VARCHAR(255) NOT NULL COMMENT "User primary document",
        secondary_document VARCHAR(255) NOT NULL COMMENT "User secondary document",
        tel VARCHAR(255) NOT NULL COMMENT "User telphone",
        email VARCHAR(255) NOT NULL COMMENT "User email",
        created_at DATE NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT "User register creation date",
        last_modify DATE NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT "User register last modification date",
        status BOOLEAN NOT NULL DEFAULT "1" COMMENT "User active status",
        INDEX idx_creation_date (created_at) COMMENT "Register creating date index",
        INDEX idx_last_modify (last_modify) COMMENT "Register alteration date index",
        PRIMARY KEY (code),
        UNIQUE(primary_document, secondary_document)
    ) CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT "Table to store system users"`;
}