import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn} from 'typeorm'
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
    readonly id: String;

    @Column()
    name:String;

    @Column()
    courseUnitId: String;

    @Column()
    grade:number;

    @CreateDateColumn()
    activy_date: Date;

    @CreateDateColumn()
    create_at: Date;

    @ManyToOne(()=>CourseUnit, course_unit => course_unit.activies)
    @JoinTable()
    course_unit: CourseUnit

}

export{Activy}