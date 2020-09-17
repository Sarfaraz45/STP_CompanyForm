using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using System.Data.Sql;
using System.Web.Script.Serialization;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.Web.UI.HtmlControls;
using System.Web.Security;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Data.Sql;
using System.Data.SqlClient;

public partial class HR_Default : System.Web.UI.Page
{
    public SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Con"].ConnectionString);
    protected void Page_Load(object sender, EventArgs e)
    {
      
    }
    [WebMethod]
    public static string LoadRegion()
    {
        SqlConnection Conn = new SqlConnection(ConfigurationManager.ConnectionStrings["Con"].ConnectionString);

        SqlDataAdapter da = new SqlDataAdapter("SELECT * from tbl_com", Conn);
        DataTable dt = new DataTable();
        da.Fill(dt);

        List<GetDistrictClass> RegionList = new List<GetDistrictClass>();
        RegionList.Clear();
        if (dt.Rows.Count > 0)
        {
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                GetDistrictClass dbdc = new GetDistrictClass();
                dbdc.ID = dt.Rows[i]["ID"].ToString();
                dbdc.Name = dt.Rows[i]["Name"].ToString();
                dbdc.Name = dt.Rows[i]["fname"].ToString();
                dbdc.Name = dt.Rows[i]["city"].ToString();


                RegionList.Insert(i, dbdc);
            }

        }


        JavaScriptSerializer jser = new JavaScriptSerializer();


        return jser.Serialize(RegionList);


    }


    [WebMethod]
    public static string LoadDetail(string id)
    {
        SqlConnection Conn = new SqlConnection(ConfigurationManager.ConnectionStrings["Con"].ConnectionString);

        SqlDataAdapter da = new SqlDataAdapter("SELECT     * tbl_com", Conn);
        DataTable dt = new DataTable();
        da.Fill(dt);

        List<GetDistrictClass> RegionList = new List<GetDistrictClass>();
        RegionList.Clear();
        if (dt.Rows.Count > 0)
        {
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                GetDistrictClass dbdc = new GetDistrictClass();

                dbdc.ID = dt.Rows[i]["ID"].ToString();
                dbdc.Name = dt.Rows[i]["Name"].ToString();
                dbdc.Name = dt.Rows[i]["fname"].ToString();
                dbdc.Name = dt.Rows[i]["city"].ToString();
                RegionList.Insert(i, dbdc);
            }

        }


        JavaScriptSerializer jser = new JavaScriptSerializer();


        return jser.Serialize(RegionList);


    }
   
   
    [WebMethod]
    public static string SaveTransaction(string Name, string fname, string city, string UserID)
    //public static string SaveTransaction(string Title,  string UserID)
    {

        string vNo = "";
        SqlConnection Con = new SqlConnection(ConfigurationManager.ConnectionStrings["Con"].ConnectionString);
        //string a = AACommon.GetAlphaNumericIDSIX("tbl_com", "tbl-", "id", Con);
        SqlCommand cmd = new SqlCommand("insert into tbl_com (Name, fname, city) values ('" + Name + "', '" + fname+ "' ,'" + city + "')", Con);
        Con.Open();
        cmd.ExecuteNonQuery();
        Con.Close();
        
        return vNo = "Saved Successfully.!";
    }

    [WebMethod]
    public static string UpdateTransaction(string Name, string fname, string city, string UserID)
    {

        string vNo = "";
        SqlConnection Con = new SqlConnection(ConfigurationManager.ConnectionStrings["Con"].ConnectionString);

        SqlCommand cmd = new SqlCommand("update tbl_com  set  ATTITLE='" + Name + "', '" + fname + "' ,'" + city + "')", Con);
        Con.Open();
        cmd.ExecuteNonQuery();
        Con.Close();

        return vNo = "Updated Successfully.!";
    }



    [WebMethod]
    public static string DeleteTransaction(string Name, string fname, string city, string UserID)
    {

        string vNo = "";
        SqlConnection Con = new SqlConnection(ConfigurationManager.ConnectionStrings["Con"].ConnectionString);

        //SqlCommand cmd = new SqlCommand("update STP_ACTIVITY  set IsDelete=1,DELETEBY='" + UserID + "',DELETEDATE='" + DateTime.Now + "' where ACTID='" + id + "'", Con);
        Con.Open();
        //cmd.ExecuteNonQuery();
        Con.Close();

        return vNo = "Deleted Successfully.!";
    }


     public class GetRegionClass
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public string VDESC { get; set; }
        public string fname { get; set; }
        public string City { get; set; }
         
    }


    public class GetDistrictClass
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public string Region { get; set; }
        public string Path { get; set; }
        public string Area { get; set; }
        public string VDESC { get; set; }
        public string fname { get; set; }
        public string City { get; set; }
        
    }

     
}