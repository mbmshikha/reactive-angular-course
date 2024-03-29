import { Component, Input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CourseDialogComponent } from "../course-dialog/course-dialog.component";
import { EventEmitter } from '@angular/core';
import { filter, tap } from "rxjs/operators";

@Component({
  selector: "courses-card-list",
  templateUrl: "./courses-card-list.component.html",
  styleUrls: ["./courses-card-list.component.css"],
})
export class CoursesCardlist implements OnInit {
  @Input()
  courses: Course[] = [];

  @Output()
  courseChanged: EventEmitter<string>;

  constructor(private dialog: MatDialog) {
    this.courseChanged = new EventEmitter();
  }

  ngOnInit() {}
  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef.afterClosed().pipe(
      filter((val) => !!val),
      tap(() => this.courseChanged.emit("course changed"))
    ).subscribe()
  }
}
