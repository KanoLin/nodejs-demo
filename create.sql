create database if not exists arknights;
use arknights;
create table if not exists staff(
    `name`  VARCHAR(10)         NOT NULL DEFAULT ''   COMMENT '姓名' PRIMARY KEY,
    `sex`   VARCHAR(2)          NOT NULL DEFAULT '女' COMMENT '性别',
    `camp`  VARCHAR(10)         NOT NULL DEFAULT ''   COMMENT '阵营',
    `type`  VARCHAR(10)         NOT NULL DEFAULT ''   COMMENT '职业',
    `level` SMALLINT UNSIGNED   NOT NULL DEFAULT 0    COMMENT '星级',
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
