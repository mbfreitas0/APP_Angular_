import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product.model';
import { ProductService } from '../product.service';
//import { Brand } from '../brand.model';
//import { Group } from '../group.model';
//import { Location } from '../location.model';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DropdownService } from '../dropdown.service';
import { first } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface Brand {
  value: number;
  viewValue: string;
}
interface Group {
  value: number;
  viewValue: string;
}
interface Location {
  value: number;
  viewValue: string;
}



@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  grupos: Group[] = [
  
    {value: 1 ,viewValue: 'PANELA'},          
    {value: 2 ,viewValue: 'FOGAO'},           
    {value: 3 ,viewValue: 'MOVEIS'},        
    {value: 4 ,viewValue: 'FERRAGENS'},     
    {value: 5 ,viewValue: 'UTIL DOMESTICAS'}, 
    {value: 6 ,viewValue: 'CAFETEIRA'},
    {value: 7 ,viewValue: 'CANECAO'  },
    {value: 8 ,viewValue: 'LEITEIRA'}
  ];
  
  marcas: Brand[] = [

    { value: 1 ,viewValue: 'CLOCK'            },
    { value: 2 ,viewValue: 'EMPRESS'          },
    { value: 3 ,viewValue: 'ERILAR'           },
    { value: 4 ,viewValue: 'FULGOR'           },
    { value: 5 ,viewValue: 'GLOBO'            },
    { value: 6 ,viewValue: 'LARES'            },
    { value: 7 ,viewValue: 'MARMICOC'         },
    { value: 8 ,viewValue: 'NIGRO'            },
    { value: 9 ,viewValue: 'ROCHEDO'          },
    { value:10 ,viewValue: 'PANEX'            },
    { value:11 ,viewValue: 'PENEDO'           },
    { value:12 ,viewValue: 'TRAMONTINA'       },
    { value:13 ,viewValue: 'DAKO'             },
    { value:14 ,viewValue: 'BRASTEMP'         },
    { value:15 ,viewValue: 'ARNO'             },
    { value:16 ,viewValue: 'PHILCO'           },
    { value:17 ,viewValue: 'BRITANIA'         },
    { value:18 ,viewValue: 'UNIV PANELA'      },
    { value:19 ,viewValue: 'UNIV FOGAO'       },
    { value:20 ,viewValue: 'UNIV MOVEIS'      },
    { value:21 ,viewValue: 'UNIV FERRAGENS'   },
    { value:22 ,viewValue: 'UNIV UTIL DOMEST' },
    { value:23 ,viewValue: 'CAFETEIRA ITALIA' },
    { value:24 ,viewValue: 'UNIV CANECAO'     },
    { value:25 ,viewValue: 'UNIV LEITEIRA'    },
    { value:26 ,viewValue: 'IMAR'             },
    { value:27 ,viewValue: 'ALCAST'           },
    { value:28 ,viewValue: 'VALENCIA'         },
    { value:29 ,viewValue: 'RENATA'           },
    { value:30 ,viewValue: 'SUPRENS'          }
  ];

 


locacoes: Location[] = [
       
{ value:   1, viewValue: 'A001'    },
{ value:   2, viewValue: 'A002'    },
{ value:   3, viewValue: 'A003'    },
{ value:   4, viewValue: 'A004'    },
{ value:   5, viewValue: 'A005'    },
{ value:   6, viewValue: 'A006'    },
{ value:   7, viewValue: 'A007'    },
{ value:   8, viewValue: 'A008'    },
{ value:   9, viewValue: 'A009'    },
{ value:  10, viewValue: 'A010'    },
{ value:  11, viewValue: 'A011'    },
{ value:  12, viewValue: 'A012'    },
{ value:  13, viewValue: 'A013'    },
{ value:  14, viewValue: 'A014'    },
{ value:  15, viewValue: 'A015'    },
{ value:  16, viewValue: 'A016'    },
{ value:  17, viewValue: 'A017'    },
{ value:  18, viewValue: 'A018'    },
{ value:  19, viewValue: 'A019'    },
{ value:  20, viewValue: 'A020'    },
{ value:  21, viewValue: 'A021'    },
{ value:  22, viewValue: 'A022'    },
{ value:  23, viewValue: 'A023'    },
{ value:  24, viewValue: 'A024'    },
{ value:  25, viewValue: 'A025'    },
{ value:  26, viewValue: 'A026'    },
{ value:  27, viewValue: 'A027'    },
{ value:  28, viewValue: 'A028'    },
{ value:  29, viewValue: 'A029'    },
{ value:  30, viewValue: 'A030'    },
{ value:  31, viewValue: 'A031'    },
{ value:  32, viewValue: 'A032'    },
{ value:  33, viewValue: 'A033'    },
{ value:  34, viewValue: 'A034'    },
{ value:  35, viewValue: 'A035'    },
{ value:  36, viewValue: 'A036'    },
{ value:  37, viewValue: 'A037'    },
{ value:  38, viewValue: 'A038'    },
{ value:  39, viewValue: 'A039'    },
{ value:  40, viewValue: 'A040'    },
{ value:  41, viewValue: 'A041'    },
{ value:  42, viewValue: 'A042'    },
{ value:  43, viewValue: 'A043'    },
{ value:  44, viewValue: 'A043'    },
{ value:  45, viewValue: 'A045'    },
{ value:  46, viewValue: 'A046'    },
{ value:  47, viewValue: 'A047'    },
{ value:  48, viewValue: 'A048'    },
{ value:  49, viewValue: 'A049'    },
{ value:  50, viewValue: 'A050'    },
{ value:  51, viewValue: 'A051'    },
{ value:  52, viewValue: 'A052'    },
{ value:  53, viewValue: 'A053'    },
{ value:  54, viewValue: 'A054'    },
{ value:  55, viewValue: 'A055'    },
{ value:  56, viewValue: 'A056'    },
{ value:  57, viewValue: 'A057'    },
{ value:  58, viewValue: 'A058'    },
{ value:  59, viewValue: 'A058'    },
{ value:  60, viewValue: 'A060'    },
{ value:  61, viewValue: 'A061'    },
{ value:  62, viewValue: 'A062'    },
{ value:  63, viewValue: 'A063'    },
{ value:  64, viewValue: 'A064'    },
{ value:  65, viewValue: 'A065'    },
{ value:  66, viewValue: 'A066'    },
{ value:  67, viewValue: 'A067'    },
{ value:  68, viewValue: 'A068'    },
{ value:  69, viewValue: 'A069'    },
{ value:  70, viewValue: 'A070'    },
{ value:  71, viewValue: 'A071'    },
{ value:  72, viewValue: 'A072'    },
{ value:  73, viewValue: 'A073'    },
{ value:  74, viewValue: 'A074'    },
{ value:  75, viewValue: 'A075'    },
{ value:  76, viewValue: 'A076'    },
{ value:  77, viewValue: 'A077'    },
{ value:  78, viewValue: 'A078'    },
{ value:  79, viewValue: 'A079'    },
{ value:  80, viewValue: 'A080'    },
{ value:  81, viewValue: 'A081'    },
{ value:  82, viewValue: 'A082'    },
{ value:  83, viewValue: 'A083'    },
{ value:  84, viewValue: 'A084'    },
{ value:  85, viewValue: 'A085'    },
{ value:  86, viewValue: 'A086'    },
{ value:  87, viewValue: 'A087'    },
{ value:  88, viewValue: 'A088'    },
{ value:  89, viewValue: 'A089'    },
{ value:  90, viewValue: 'A090'    },
{ value:  91, viewValue: 'A091'    },
{ value:  92, viewValue: 'A092'    },
{ value:  93, viewValue: 'A093'    },
{ value:  94, viewValue: 'A094'    },
{ value:  95, viewValue: 'A095'    },
{ value:  96, viewValue: 'A096'    },
{ value:  97, viewValue: 'A097'    },
{ value:  98, viewValue: 'A098'    },
{ value:  99, viewValue: 'A099'    },
{ value:  100, viewValue: 'A100'   },

];

  form: FormGroup;
  id = '';
  id_grupo = '';
  id_marca = '';
  id_locacao = '';
  status = '';
  descricao = '';
  estoque_min = '';
  estoque_max = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

 

  //Variável Interface
  //marcas: Observable<Brand[]>;
  //grupos: Observable<Group[]>;
  //locacaos: Observable<Location[]>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private dropdownService: DropdownService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.getProduct(this.route.snapshot.params['id']);
    this.form = this.fb.group({
      
      'id_grupo': [null, Validators.required],
      'id_marca': [null, Validators.required],
      'id_locacao': [null, Validators.required],
      'status': [null, Validators.required],
      'descricao': [null, Validators.required],
      'estoque_min': [null, Validators.required],
      'estoque_max': [null, Validators.required]
    });
  }

  getProduct(id: any) {
    this.productService.getProductById(id).subscribe((data: any) => {
      this.id = data.id;
      this.form.patchValue({
        id_grupo: data.id_grupo,
        id_marca: data.id_marca,
        id_locacao: data.id_locacao,
        status: data.status,
        descricao: data.descricao,
        estoque_min: data.estoque_min,
        estoque_max: data.estoque_max

      });
    });
  }


  onSubmit() {
    this.isLoadingResults = true;
    this.productService.updateProduct(this.id, this.form.value)
      .subscribe((res: any) => {
        const id = res.id;
        this.isLoadingResults = false;
        this.router.navigate(['/products']);
      }, (err: any) => {
        console.log(err);

      }
      );
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}