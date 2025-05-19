import { useEffect, useState, useCallback,useRef } from "react";
import { days, sessions} from "../../../../Data/ScheduleData";
import { successNotify } from "../../../../Components/Common/Toast";
import DeleteSessionModal from "./modals/DeleteSessionModal";
import ManagingScheduleModal from "./modals/ManagingScheduleModal";
import ScheduleContainer from "../../../../Components/Schedule/ScheduleContainer";
import { exportScheduleAsPdf } from "../../../../utils/Export/ExportScheduleAsPdf";
import ContextMenu from "./modals/ContextMenu";
import ClearScheduleModal from "./modals/ClearScheduleModal";
import ScheduleHeader from "../../../../Components/Schedule/ScheduleHeader";
import RestoreClearedSchedule from "../../../../Components/Schedule/RestoreClearedSchedule";
import useScheduleVersion from "../../../../utils/Hooks/useScheduleVersion";
import useSessionManagement from "../../../../utils/Hooks/useSessionManaging";
import { useModalState } from "../../../../utils/Hooks/useModalState";
import RenderSessionCell from "../../../../Components/Schedule/RenderCell";
import { rightClick } from "../../../../utils/AdminScheduleFunction/rightClick";
import Logo from '../../../../assests/logo.png'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { imgData } from "../../../../utils/imgData";


export default function Schedule({entity,item , Items}) {
    
    const {scheduleData , name} = Items
    const scheduleSessions = entity === 'group' ? sessions.filter(session => session.start !== '19:30' ) : sessions
    const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });

    const {
            activeScheduleVersion, 
            scheduleVersions, 
            goToPreviousVersion, 
            goToNextVersion, 
            getCurrentSchedule,
            addVersion,
            resetScheduleVersions
        } = useScheduleVersion(scheduleData);
   
        const { getModalState, openModal, closeModal, closeAllModals } = useModalState();

        const modal = {closeModal,closeAllModals}
        const versioning = {addVersion,resetScheduleVersions}
        const {
            schedule,
            setSchedule,
            selectedSession,
            setSelectedSession,
            selectedSessionToCopy,
            isScheduleClearedTemporarly,
            addSession,
            deleteSession,
            restoreToOriginal,
            restoreSession,
            copySession,
            cutSession,
            pasteSession,
            replaceSession,
            clearSchedule,
            restoreSchedule,
            handleCancel,
        } = useSessionManagement(getCurrentSchedule() , modal, versioning);

        const handleSaveChanges = () => {
            successNotify('changes saved successfully') 
        };
        const captureRef = useRef();
         
    
       
        

  
        
       
          
  const numberHours = schedule.length * 2.5
          
          
         
        const handleExport = () => {
            const success = exportScheduleAsPdf({
                schedule,
                entity,
                days,
                numberHours ,
                item,
                sessions : scheduleSessions,
                entityName : item[name]
            });

            if (success) successNotify('Schedule saved & exported successfully');
            
        }

        const handleRowRightClick = (cell,e) => rightClick(cell,e,selectedSession,setSelectedSession,setContextMenuPosition,openModal);
    
        const resetContextMenu = useCallback(() => {
            setSelectedSession(null);
            closeModal('contextMenu');
        }, [closeModal,setSelectedSession]);

        useEffect(() => {
            const handleKeyDown = (e) => {
            if (e.key === 'Escape' && selectedSession?.idSession) {  // Fixed typo: 'Espace' → 'Escape'
                resetContextMenu();
            }
            };
            // Add both event listeners
            document.addEventListener('keydown', handleKeyDown);
        
            // Cleanup both event listeners
            return () => {
            document.removeEventListener('keydown', handleKeyDown);
            };
        }, [selectedSession,resetContextMenu]);

        const entityName = item[name]
        const getGender = (gender) => {
            return gender === 'Male' ? 'Mr' : 'Mme'
        }
        const title = entity === 'teacher' ? getGender(item.gender) : entity
        

        const exportPDF = async () => {
            const input = captureRef.current;
            try {
              
              if (!input) throw new Error("Table element not found");
              
              const pdf = new jsPDF("p", "mm", "a4",'l');
           
          
              const canvas = await html2canvas(input, {
                scale: 2,
                logging: false,
                useCORS: true,
                scrollY: -window.scrollY,
                windowWidth: input.scrollWidth,
                windowHeight: input.scrollHeight
              });
              // Add the image at the top of the document
                
          
              const imgData2 = canvas.toDataURL("image/png");
              const pageWidth = pdf.internal.pageSize.getWidth();
              const imgWidth = pageWidth - 20;
              const imgHeight = (canvas.height * imgWidth) / canvas.width;
              pdf.addImage(imgData2, "PNG", 10, 7, imgWidth, imgHeight);
              pdf.addImage(
                imgData,
                'PNG', // or 'PNG', 'WEBP', etc.
                91.5, // x position (margin from left)
                5, // y position (margin from top)
                28, // width of the image in mm or points
                17// height of the image in mm or points
            );
              pdf.save(`${item[name]}_${new Date().getDate()}.pdf`);
            
              
            } catch (error) {
              console.error("PDF export failed:", error);
              alert(`Failed to generate PDF: ${error.message}`);
            }
          };

    return (
    <>
            {
               isScheduleClearedTemporarly.is_temporary && (
                    <RestoreClearedSchedule 
                        entityName={item?.[name]}
                        isScheduleClearedTemporarly={isScheduleClearedTemporarly}
                        restoreSchedule={restoreSchedule}
                    />
               )
            } 
            {
                !isScheduleClearedTemporarly.is_temporary && (
                <>
                    <ScheduleHeader 
                        handlePreviousVersion={() => setSchedule(goToPreviousVersion())}
                        handleNextVersion={() => setSchedule(goToNextVersion())}
                        entity={entity}
                        activeScheduleVersion={activeScheduleVersion}
                        scheduleVersionsLength={scheduleVersions.length}
                        scheduleLength={schedule.length}
                        handleClearSchedule={() => openModal('clearSchedule')}
                        handleSaveChanges={handleSaveChanges}
                        item={item}
                        name={name}
                        numberHours={numberHours}
                       
                        handleExport = {exportPDF}
                    />

                    <div ref={captureRef}>
                        <div className="flex  items-center justify-between">
                            <div className="flex flex-col items-start justify-start text-lg text-gray-700 font-bold mb-9 mt-2.5">
                                <span>ISTA DAKHLA</span>
                                <h1 className="text-base capitalize font-meduim text-gray-700 dark:text-gray-50 ">
                                    {entity === 'Teacher' ? `${title} .` : title} {entityName} 
                                    ({numberHours} <span className="text-gray-500 text-sm">hours</span>)
                                </h1>
                            
                                
                            </div>
                            <div className=" flex items-end justify-start flex-col mb-4">
                                <span className="font-bold text-xl">2024/2025</span>
                                <h2 className=" font-bold text-gray-700"> 
                                    <span className="text-gray-500 text-sm pr-3 ">A partit de</span> 
                                    2025/04/10
                                </h2>
                            </div>
                        </div>
                        <div className="mb-6 mt-1 text-base font-bold flex items-center justify-center">
                            <span>L'emploi du Temps S2 (Hy bride)</span>
                        </div>
                        <ScheduleContainer 
                            
                            sessions={scheduleSessions} 
                            days={days} 
                        >
                            {
                                days.map((day,dayIndex)=>
                                    scheduleSessions.map((session, sessionIndex) => 
                                    <RenderSessionCell
                                        key={`day-${dayIndex}-${session.start}`} 
                                        day={day} 
                                        dayIndex={dayIndex} 
                                        session={session} 
                                        sessionIndex={sessionIndex} 
                                        schedule={schedule} 
                                        entity = {entity}
                                        handleRowRightClick={handleRowRightClick}
                                        entityName={item[name]}
                                    /> 
                                ))
                            }
                        </ScheduleContainer>
                        <div className=" flex items-center justify-center px-2 md:px-4  h-full dark:bg-orange-950 dark:border-orange-500 dark:text-white text-gray-700 text-sm font-medium md:font-semibold md:text-lg mt-3 rounded-lg py-2">
                          <span>NB:POUR LE VENDREDI:SEANCE 1 (08h30-10h30) SEANCE 2 (10h30-12h30) SEANCE 3 (15h-17h) SEANCE 4 (17h-19h)</span>

                        </div>

                    </div>

                    
                </>
               )
            }

           
           
            {getModalState('scheduleManaging') && (
                <ManagingScheduleModal 
                    onCancel={handleCancel}
                    session={selectedSession}
                    handleSubmit={addSession}
                    restoreSession={restoreSession}
                    handleBackToOriginal={restoreToOriginal}
                    entityName={item[name]}
                    entity = {entity}
                    
                />
            )}

            {getModalState('delete Session') && (
                <DeleteSessionModal 
                    deleteSession={deleteSession}
                    handleCancel={handleCancel}
                    session={selectedSession}
                />
            )}

            {getModalState('clearSchedule') && (
                <ClearScheduleModal 
                    clearSchedule={clearSchedule}
                    handleCancel={handleCancel}
                />
            )}

            {getModalState('contextMenu') && (
                   <div 
                        className="fixed z-50"
                    
                        style={{
                            top: `${contextMenuPosition.top}px`,
                            left: `${contextMenuPosition.left}px`,
                            transformOrigin: 'top'
                        }}
                    >
                       <ContextMenu 
                          
                          handleCopy={copySession}
                          handleCut={cutSession}
                          handlePaste={pasteSession}
                          handleDelete={()=> openModal('delete')}
                          handleReplace={replaceSession}
                          handleModify={()=> openModal('scheduleManaging')}
                          selectedSession={selectedSession}
                          selectedSessionToCopy={selectedSessionToCopy}
                          entity={entity}
                       />
                    </div>
            )}
        </>
    );
}


