import {Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid';
import {CourseUnit} from './CourseUnit';


@Entity("activies")
class Activy{

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    readonly id: String

    @ManyToOne(()=>CourseUnit, course_unit => course_unit.activies)
    course_unit: CourseUnit[]

    @Column()
    name:String;

    @Column()
    course_unit_id: String;

    @CreateDateColumn()
    activy_date: Date;

    @CreateDateColumn()
    create_at: Date;

}

export{Activy}