import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  post: Post | undefined;

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        //console.log('Turan', id);
        if(id){
          this.postService.getPostById(id).subscribe(
            response => {
              //console.log('Post', response);
              this.post = response;
            }
          );
        }
      }
    )
    
  }

}
