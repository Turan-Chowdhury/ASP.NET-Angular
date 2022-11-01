﻿using Microsoft.EntityFrameworkCore;
using TheDevBlog.API.Models.Entities;

namespace TheDevBlog.API.Data
{
    public class TheDevBlogDbContext : DbContext
    {
        public TheDevBlogDbContext(DbContextOptions options) : base(options)
        {
        }

        // DbSet
        public DbSet<Post> Posts { get; set; }
    }
}
