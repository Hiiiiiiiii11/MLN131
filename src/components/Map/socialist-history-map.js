// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"

// const historicalPeriods = [
//   {
//     id: "ancient",
//     title: "Thời Cổ Đại",
//     period: "427-347 TCN",
//     description: "Những tư tưởng đầu tiên về xã hội lý tưởng",
//     thinkers: [
//       {
//         name: "Plato",
//         work: "Cộng hòa (The Republic)",
//         description:
//           "Mô tả xã hội lý tưởng với phân chia giai cấp theo tài năng, không có tư hữu cá nhân đối với tầng lớp cai trị.",
//       },
//     ],
//     color: "#8B4513",
//   },
//   {
//     id: "medieval",
//     title: "Thời Cận Đại",
//     period: "1516-1623",
//     description: "Sự xuất hiện của các mô hình xã hội không tưởng",
//     thinkers: [
//       {
//         name: "Thomas More",
//         work: "Utopia (1516)",
//         description: "Xã hội không có tư hữu, mọi người bình đẳng, lao động chung và hưởng thụ chung.",
//       },
//       {
//         name: "Tommaso Campanella",
//         work: "Thành phố Mặt Trời (1623)",
//         description: "Mô hình cộng đồng lý tưởng với chế độ công hữu hoàn toàn.",
//       },
//     ],
//     color: "#4A5568",
//   },
//   {
//     id: "enlightenment",
//     title: "Thế kỷ 18-19",
//     period: "1760-1840",
//     description: "Chủ nghĩa xã hội không tưởng phát triển mạnh mẽ",
//     thinkers: [
//       {
//         name: "Henri de Saint-Simon",
//         work: "Hệ thống công nghiệp (1821)",
//         description: "Nhấn mạnh vai trò của khoa học, kỹ sư và nhà công nghiệp trong xã hội mới.",
//       },
//       {
//         name: "Charles Fourier",
//         work: "Lý thuyết về bốn phong trào (1808)",
//         description: 'Đề xuất các cộng đồng "phalanstère" - nơi mọi người sống chung và chia sẻ.',
//       },
//       {
//         name: "Robert Owen",
//         work: "Quan điểm mới về xã hội (1813)",
//         description: "Cải cách xã hội thông qua các khu công nghiệp kiểu mẫu và giáo dục.",
//       },
//     ],
//     color: "#2B6CB0",
//   },
//   {
//     id: "scientific",
//     title: "Chủ nghĩa xã hội khoa học",
//     period: "1848-1883",
//     description: "Sự ra đời của chủ nghĩa xã hội khoa học",
//     thinkers: [
//       {
//         name: "Karl Marx & Friedrich Engels",
//         work: "Tuyên ngôn Đảng Cộng sản (1848)",
//         description: "Phân tích khoa học về xã hội tư bản và con đường đến chủ nghĩa xã hội.",
//       },
//     ],
//     color: "#DC2626",
//   },
// ]

// export default function SocialistHistoryMap() {
//   const [selectedPeriod, setSelectedPeriod] = useState("ancient")
//   const currentPeriod = historicalPeriods.find((p) => p.id === selectedPeriod)

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-slate-800 to-blue-900 text-white py-16">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
//             Tư Tưởng Xã Hội Chủ Nghĩa Trong Lịch Sử Nhân Loại
//           </h1>
//           <p className="text-xl md:text-2xl text-blue-100 text-pretty">
//             Hành trình từ những ý tưởng không tưởng đến khoa học xã hội
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 py-12">
//         {/* Timeline Navigation */}
//         <div className="mb-12">
//           <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Dòng Thời Gian Lịch Sử</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {historicalPeriods.map((period) => (
//               <Button
//                 key={period.id}
//                 onClick={() => setSelectedPeriod(period.id)}
//                 variant={selectedPeriod === period.id ? "default" : "outline"}
//                 className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
//                   selectedPeriod === period.id
//                     ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
//                     : "hover:bg-blue-50 border-blue-200"
//                 }`}
//               >
//                 <div className="text-center">
//                   <div className="font-bold">{period.title}</div>
//                   <div className="text-xs opacity-75">{period.period}</div>
//                 </div>
//               </Button>
//             ))}
//           </div>
//         </div>

//         {/* World Map Section */}
//         <div className="mb-12">
//           <Card className="overflow-hidden shadow-2xl">
//             <CardContent className="p-0">
//               <div className="relative">
//                 <img
//                   src="/images/world-map-socialist.png"
//                   alt="Bản đồ thế giới với các sự kiện lịch sử xã hội chủ nghĩa"
//                   className="w-full h-auto"
//                 />
//                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
//                   <h3 className="font-bold text-lg text-slate-800 mb-2">Các Sự Kiện Lịch Sử Quan Trọng</h3>
//                   <p className="text-sm text-slate-600">
//                     Bản đồ thể hiện sự phát triển của tư tưởng xã hội chủ nghĩa trên toàn thế giới
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Period Details */}
//         {currentPeriod && (
//           <div className="mb-12">
//             <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
//               <CardContent className="p-8">
//                 <div className="text-center mb-8">
//                   <div
//                     className="inline-block px-4 py-2 rounded-full text-white font-bold mb-4"
//                     style={{ backgroundColor: currentPeriod.color }}
//                   >
//                     {currentPeriod.period}
//                   </div>
//                   <h2 className="text-4xl font-bold text-slate-800 mb-4">{currentPeriod.title}</h2>
//                   <p className="text-xl text-slate-600 text-pretty">{currentPeriod.description}</p>
//                 </div>

//                 <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
//                   {currentPeriod.thinkers.map((thinker, index) => (
//                     <Card
//                       key={index}
//                       className="border-l-4 hover:shadow-lg transition-shadow duration-300"
//                       style={{ borderLeftColor: currentPeriod.color }}
//                     >
//                       <CardContent className="p-6">
//                         <h3 className="text-2xl font-bold text-slate-800 mb-2">{thinker.name}</h3>
//                         <h4 className="text-lg font-semibold text-blue-600 mb-3">{thinker.work}</h4>
//                         <p className="text-slate-700 leading-relaxed text-pretty">{thinker.description}</p>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}

//         {/* Key Figures Section */}
//         <div className="grid gap-8 md:grid-cols-2 mb-12">
//           <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
//             <CardContent className="p-0">
//               <div className="flex flex-col md:flex-row">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/330px-Karl_Marx_001.jpg"
//                   alt="Karl Marx"
//                   className="w-full md:w-48 h-64 object-cover"
//                 />
//                 <div className="p-6 flex-1">
//                   <h3 className="text-2xl font-bold text-slate-800 mb-3">Karl Marx</h3>
//                   <p className="text-slate-600 text-sm leading-relaxed">
//                     (1818-1883) Nhà triết học, kinh tế học và cách mạng người Đức. Tác giả của "Tuyên ngôn Đảng Cộng
//                     sản" và "Das Kapital", người đặt nền móng cho chủ nghĩa xã hội khoa học.
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
//             <CardContent className="p-0">
//               <div className="flex flex-col md:flex-row">
//                 <img
//                   src="https://images.hcmcpv.org.vn/res/news/2021/11/28-11-2021-friedrich-engels-lanh-tu-vi-dai-cua-giai-cap-cong-nhan-va-nhung-nguoi-cong-san-511B6A81.jpg"
//                   alt="Friedrich Engels"
//                   className="w-full md:w-48 h-64 object-cover"
//                 />
//                 <div className="p-6 flex-1">
//                   <h3 className="text-2xl font-bold text-slate-800 mb-3">Friedrich Engels</h3>
//                   <p className="text-slate-600 text-sm leading-relaxed">
//                     (1820-1895) Nhà hoạt động cách mạng và lý thuyết gia người Đức. Cộng sự thân thiết của Marx, đồng
//                     tác giả "Tuyên ngôn Đảng Cộng sản" và người đồng sáng lập chủ nghĩa cộng sản khoa học.
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Summary Section */}
//         <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
//           <CardContent className="p-8 text-center">
//             <h2 className="text-3xl font-bold mb-4">Kết Luận</h2>
//             <p className="text-xl leading-relaxed text-pretty">
//               Từ những ý tưởng không tưởng của Plato đến lý thuyết khoa học của Marx và Engels, tư tưởng xã hội chủ
//               nghĩa đã trải qua một hành trình dài và phong phú. Mỗi giai đoạn đều đóng góp những giá trị quan trọng vào
//               kho tàng tư tưởng nhân loại, hướng tới một xã hội công bằng và tiến bộ hơn.
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
