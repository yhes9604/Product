<template>
  <div class="desc_main container">
    <div class="location">
      <div class="locationLeft">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="鄉鎮市區、縣市、郵遞區號"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            v-model="restaurant.address"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            @click="geocode"
          >
            搜尋
          </button>
        </div>
      </div>
      <div class="locationRight">
        <button @click="nowlocation">
          <i class="fa-solid fa-location-crosshairs"></i>
          附近麥當勞
        </button>
      </div>
    </div>

    <div id="map"></div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const restaurant = {
      address: "",
      name: "",
      lat: "",
      lng: "",
    };
    const errormsg = ref(null);
    const hasGeo = ref(false);

    const geocoder = new google.maps.Geocoder();
    function geocode() {
      const address = restaurant.address;
      geocoder.geocode(
        {
          address,
          componentRestrictions: {
            country: "TW",
          },
        },
        (results, status) => {
          if (status === "OK") {
            restaurant.lat = results[0].geometry.location.lat();
            restaurant.lng = results[0].geometry.location.lng();
            hasGeo.value = true;
            errormsg.value = null;

            marklocation();
          } else {
            hasGeo.value = false;
            errormsg.value = status;
          }
        }
      );
    }

    function nowlocation() {
      getLocation();
      marklocation();
    }
    const marklocation = () => {
      var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: restaurant.lat, lng: restaurant.lng },
        zoom: 15,
      });
      var request = {
        location: { lat: restaurant.lat, lng: restaurant.lng },
        radius: "500",
        query: "麥當勞",
      };
      var service = new google.maps.places.PlacesService(map);
      service.textSearch(request, function (results, status) {
        if (
          status == google.maps.places.PlacesServiceStatus.OK &&
          results.length > 0
        ) {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
            });
          }
        }
      });
    };
    const initMap = () => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: restaurant.lat, lng: restaurant.lng },
        zoom: 15,
      });
      marklocation();
    };

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        restaurant.lat = position.coords.latitude;
        restaurant.lng = position.coords.longitude;
        initMap();
      });
    };

    onMounted(() => {
      getLocation();
    });
    return {
      restaurant,
      errormsg,
      geocode,
      hasGeo,
      nowlocation,
    };
  },
};
// window.onload = function () {
//   navigator.geolocation.getCurrentPosition(function (position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     var map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: latitude, lng: longitude },
//       zoom: 15,
//     });

// var request = {
//   location: { lat: latitude, lng: longitude },
//   radius: "500",
//   query: "麥當勞",
// };

// var service = new google.maps.places.PlacesService(map);
// service.textSearch(request, function (results, status) {
//   if (
//     status == google.maps.places.PlacesServiceStatus.OK &&
//     results.length > 0
//   ) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       var marker = new google.maps.Marker({
//         map: map,
//         position: place.geometry.location,
//       });
//     }
//   }
//     // });
//   });
// };
</script>
<style scoped>
#map {
  height: 100vh; /* The height is 400 pixels */
  width: 98%; /* The width is the width of the web page */
  margin: 20px;
}

.location {
  display: flex;
  margin: 20px;
}
.locationLeft {
  width: 80%;
  display: flex;
}
.locationRight {
  width: 20%;
  margin-left: 5px;
  display: flex;
  justify-content: center;
}
.input-group {
  height: 100%;
}
.locationRight > button {
  width: 100%;
  border: none;
  background-color: #ffbc0e;
  font-size: 16px;
  border-radius: 8px;
}
</style>