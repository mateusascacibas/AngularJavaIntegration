import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  result: String | undefined;

  exercises: any[] = [
    {
      'description': 'Exercise that receives two people with name and age, with the data defines who is the oldest.',
      'category': 'class',
      'categoryDescription': 'Class',
      'number': 'Exe1',
      'exe': "Exercise 01",
      'first': true
    },
    {
      'description': 'Returns the salary at the beginning of the job and the salary after a 15% increase.',
      'category': 'class',
      'number': 'Exe2',
      'exe': "Exercise 02"
    },
    {
      'description': 'Exercise Elevator',
      'category': 'class',
      'number': 'Exe3',
      'exe': "Exercise 03"
    },
    {
      'description': 'Returns if number is positive or negative.',
      'category': 'conditional',
      'categoryDescription': 'Conditional',
      'number': 'Exe1',
      'exe': "Exercise 01",
      'first': true
    },
    {
      'description': 'Returns if the number is even or odd.',
      'category': 'conditional',
      'number': 'Exe2',
      'exe': "Exercise 02"
    },
    {
      'description': 'Returns if the numbers informed are multiple or not.',
      'category': 'conditional',
      'number': 'Exe3',
      'exe': "Exercise 03"
    },
    {
      'description': 'Returns game duration, based on start time and end time.',
      'category': 'conditional',
      'number': 'Exe4',
      'exe': "Exercise 04"
    },
    {
      'description': 'Returns data from two people, using inheritance in the code.',
      'category': 'heritage',
      'categoryDescription': 'Heritage',
      'number': 'Exe1',
      'exe': "Exercise 01",
      'first': true
    },
    {
      'description': 'Returns sum of two numbers.',
      'category': 'sequential',
      'categoryDescription': 'Sequential',
      'number': 'Exe1',
      'exe': "Exercise 01",
      'first': true
    },
    {
      'description': 'Return difference between numbers.',
      'category': 'sequential',
      'number': 'Exe2',
      'exe': "Exercise 02"
    },
    {
      'description': 'Return total salary, based in salary by hours.',
      'category': 'sequential',
      'number': 'Exe3',
      'exe': "Exercise 03"
    },
    // {
    //   'description': 'Returns value number in vector.',
    //   'category': 'vectormatrix',
    //   'number': 'Exe1',
    //   'exe': "Exercise 01"
    // },
    {
      'description': 'Returns the odd numbers from 1 to typed.',
      'category': 'loop',
      'categoryDescription': 'Loop',
      'number': 'Exe1',
      'exe': "Exercise 01",
      'first': true
    },

  ]
  constructor(private http: HttpClient, private service: ServicesService) {
  }

  exercisesRun(category: String, exercise: String) {

    if (category == "class") {
      if (exercise == "Exe1") {
        this.service.classExe1().subscribe(
          dados => {
            this.result = dados;

          },
          () => alert("Erro obtendo resultado")
        );

      } else if (exercise == "Exe2") {
        this.service.classExe2().subscribe(
          dados => {
            this.result = dados;

          },
          () => alert("Erro obtendo resultado")
        );
      } else if (exercise == "Exe3") {
        this.service.classExe3().subscribe(
          dados => {
            this.result = dados;

          },
          () => alert("Erro obtendo resultado")
        );
      } else {
        alert("Erro ao pesquisar exercicio.")
      }
    } else if (category == "conditional") {
      if (exercise == "Exe1") {
        this.service.conditionalExe1().subscribe(
          dados => {
            this.result = dados;

          },
          () => alert("Erro obtendo resultado")
        );
      } else if (exercise == "Exe2") {
        this.service.conditionalExe2().subscribe(
          dados => {
            this.result = dados;

          },
          () => alert("Erro obtendo resultado")
        );
      } else if (exercise == "Exe3") {
        this.service.conditionalExe3().subscribe(
          dados => {
            this.result = dados;

          },
          () => alert("Erro obtendo resultado")
        );
      } else if (exercise == "Exe4") {
        this.service.conditionalExe4().subscribe(
          dados => {
            this.result = dados;

          },
          () => alert("Erro obtendo resultado")
        );
      } else {
        alert("Erro ao pesquisar exercicio.")
      }
    } else if (category == "heritage") {
      if (exercise = "Exe1") {
        this.service.heritageExe1().subscribe(
          dados => {
            this.result = dados;

          },
          () => alert("Erro obtendo resultado")
        );
      } else {
        alert("Erro ao pesquisar exercicio.")
      }
    } else if (category == "sequential") {
      if (exercise == "Exe1") {
        this.service.sequentialExe1().subscribe(
          dados => {
            this.result = dados;

          },
          () => alert("Erro obtendo resultado")
        );
      } else if (exercise == "Exe2") {
        this.service.sequentialExe2().subscribe(
          dados => {
            this.result = dados;

          },
          () => alert("Erro obtendo resultado")
        );
      } else if (exercise == "Exe3") {
        this.service.sequentialExe3().subscribe(
          dados => {
            this.result = dados;

          },
          () => alert("Erro obtendo resultado")
        );
      } else {
        alert("Erro ao pesquisar exercicio.")
      }
    } else if (category == "vectormatrix") {
      if (exercise == "Exe1") {
        this.service.vectorAndMatrixExe1().subscribe(
          dados => {
            this.result = dados;

          },
          () => alert("Erro obtendo resultado")
        );
      }
    } else if (category == "loop") {
      if (exercise == "Exe1") {
        this.service.loopExe1().subscribe(
          dados => {
            this.result = dados;

          },
          () => alert("Erro obtendo resultado")
        );
      }
      else {
        alert("Erro ao pesquisar exercicio.")
      }
    }
    else {
      alert("Erro procura categorias")
    }
  }


  ngOnInit(): void {
  }

}
