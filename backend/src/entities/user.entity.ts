import {
   Column,
   Entity,
   PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
   @PrimaryGeneratedColumn()
      id = 0;

   @Column('json')
      name = '';

   @Column('json')
      details = '';
   
   @Column('json')
      address = '';

   @Column({ unique: true })
      email = '';

   @Column({ unique: true })
      phone = '';

   @Column()
      password = '';

  @Column('json')
     permissions = '';
}
