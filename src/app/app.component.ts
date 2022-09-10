import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  courses = COURSES;
  @ViewChild('cardRef1')
  card1:CourseCardComponent;

  @ViewChild('cardRef2',{read:ElementRef})
  card2:ElementRef;

  @ViewChild('container')
  containerDiv:ElementRef;


  @ViewChildren(CourseCardComponent,{read:ElementRef})
  cards:QueryList<CourseCardComponent>;

  ngAfterViewInit(){
    console.log(this.cards);
    
  }
  onCardClicked(course:Course){
    // console.log('Card clicked',course);
    console.log('Cards ',this.cards);
    // console.log('Card 2',this.card2);
    // console.log('ContainerDic',this.containerDiv);
    
  }

  editButtonClicked(){
    this.courses.push(
      {
        id: 12,
        description: "Angular Universal",
        iconUrl: "https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png",
        longDescription: "Build Applications with the official Angular Widget Library"
        // category: 'ADVANCED'
    }
    )
  }

}
