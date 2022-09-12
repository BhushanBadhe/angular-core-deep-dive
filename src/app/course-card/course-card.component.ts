import { Component, Input, OnInit, Output,EventEmitter, ViewChild, AfterViewInit, ContentChild, ElementRef, ContentChildren, AfterContentInit, QueryList, TemplateRef } from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';

import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit,AfterViewInit,AfterContentInit {

  @Input()
  course:Course;

  @Input()
  noImageTpl:TemplateRef<any>;

  @Input()
  cardIndex:number;

  @ContentChildren(CourseImageComponent,{read:ElementRef})
  images:QueryList<ElementRef>;


  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }


  ngAfterContentInit(): void {
    console.log(this.images);
  }
  ngAfterViewInit(): void {
    
    
  }



  ngOnInit(): void {
    
  }

  onCourseViewed(){
    console.log("onCourseViewed clicked");
    this.courseEmitter.emit(this.course);
    
  }

  imageUnavailable(){
    return this.course && this.course.iconUrl;
  }

  cardClasses(){
    if(this.course.category =='BEGINNER'){
      return 'beginner';
    }
    
  }
  cardStyles(){
    return{
      'background-image':'url('+ this.course.iconUrl+')'
    }
  }
  
}
