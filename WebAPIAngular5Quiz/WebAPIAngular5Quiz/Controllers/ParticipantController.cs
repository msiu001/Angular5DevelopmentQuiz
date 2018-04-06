﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPIAngular5Quiz.Models;
using System.Data;
using System.Data.Entity;

namespace WebAPIAngular5Quiz.Controllers
{
    public class ParticipantController : ApiController
    {
        [HttpPost]
        [Route("api/InsertParticipant")]
        public Participant Insert( Participant model)
        {
            using(DBModel db = new DBModel())
            {
                db.Participants.Add(model);
                db.SaveChanges();
                return model;
            }
        }


        [HttpPost]
        [Route("api/UpdateOutput")]
        public void UpdateOutput(Participant model)
        {
            using (DBModel db = new DBModel())
            {
                db.Entry(model).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
            }
        }
    }
}
