import {Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid';
import { Activy } from './Activy';

@Entity("users")
class CourseUnit{

    //Constructor
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

    @PrimaryColumn()
    readonly id: String

    @OneToMany(() => Activy, activy => activy.course_unit)
    activies: Activy[]

    // Outros atributos
    @Column()
    name: String;

    @Column()
    description: String;

    @CreateDateColumn()
    create_at: Date;

}

export{CourseUnit}