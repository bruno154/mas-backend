import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCourseUnits1619878835208 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name:"courseUnits",
                columns:[
                    {
                        name:"id",
                        type:"varchar",
                        isPrimary: true
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"description",
                        type:"varchar"
                    },
                    {
                        name:"create_at",
                        type:"timestamp",
                        default: "now()",
                    }
                ]

            }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("courseUnits")
    }

}
