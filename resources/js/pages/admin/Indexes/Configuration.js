import { useState } from "react"
import { Switch } from "../../../Components/form/Switch"
import { Clock, Plus, Trash2 } from "lucide-react"
import CustomTimePicker from "../../../Components/form/CustomTimePicker"

export default function Configuration() {
    const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const [workDays, setWorkDays] = useState([])
    const [isCoursDuSoir, setIsCoursDuSoir] = useState(false)
    const [sessions, setSessions] = useState({
        morning: [],
        afternoon: [],
        night: []
    })
    const [newSession, setNewSession] = useState({
        morning: { start: '', end: '' },
        afternoon: { start: '', end: '' },
        night: { start: '', end: '' }
    })
  

    const isDaySelected = (day) => {
        return workDays.includes(day)
    }

    const managingSelectingDays = (day) => {
        setWorkDays(prev => 
            isDaySelected(day) 
                ? prev.filter(d => d !== day)
                : [...prev, day]
        )
    }

    const handleChangeSession = (value) => {
        setIsCoursDuSoir(value)
        if (!value) {
            setSessions(prev => {
               
                return {...prev , night: []}
            })
            setNewSession(prev => {
             
                return {...prev , night: { start: '', end: '' }}
            })
        }
    }

    const handleTimeChange = (period, type, value) => {
        setNewSession(prev => ({
            ...prev,
            [period]: {
                ...prev[period],
                [type]: value
            }
        }))
    }

    const addSession = (period) => {
        const { start, end } = newSession[period]
        if (!start || !end) return

        if (start >= end) {
            alert('Start time must be before end time')
            return
        }

        setSessions(prev => ({
            ...prev,
            [period]: [...prev[period], { start, end }]
        }))

        setNewSession(prev => ({
            ...prev,
            [period]: { start: '', end: '' }
        }))
    }

    const removeSession = (period, index) => {
        setSessions(prev => ({
            ...prev,
            [period]: prev[period].filter((_, i) => i !== index)
        }))
    }

    


    return (
        <div className='p-4 w-full max-w-6xl mx-auto space-y-8'>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Configuration</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Configure working days and sessions</p>
                </div>
            </div>

            {/* Work Days Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Working Days</h2>
                <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                    {allDays.map(day => (
                        <button
                        key={day} 
                        onClick={() => managingSelectingDays(day)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                isDaySelected(day)
                                    ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-700/50 dark:text-gray-300 dark:hover:bg-gray-700'
                            }`}
                    >
                        {day}
                        </button>
                    ))}
                </div>
           </div>

            {/* Sessions Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Sessions</h2>
           <Switch 
                        label="Enable Evening Classes"
                        handleChange={() => handleChangeSession(!isCoursDuSoir)}
             checked={isCoursDuSoir}
                        name="coursDuSoir"
           />
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Morning Sessions */}
                    <div className="space-y-4">
                        <h3 className="text-md font-medium text-gray-900 dark:text-white">Morning</h3>
                        <div className="space-y-3">
                            {sessions.morning.map((session, index) => (
                                <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                    <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">
                                        {session.start} - {session.end}
                                    </span>
                                    <button
                                        onClick={() => removeSession('morning', index)}
                                        className="ml-auto p-1 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-2">
                            <div className="flex gap-2">
                                <CustomTimePicker 
                                    value={newSession.morning.start}
                                    onChange={(value) => handleTimeChange('morning', 'start', value)}
                                    className="flex-1 w-full"
                                    placeholder="Start Time"
                                />
                                <CustomTimePicker 
                                    value={newSession.morning.end}
                                    onChange={(value) => handleTimeChange('morning', 'end', value)}
                                    className="flex-1 w-full"
                                    placeholder="End Time"
                                />
                            </div>
                            <button
                                onClick={() => addSession('morning')}
                                className="w-full px-3 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                            >
                                <Plus className="w-4 h-4 mx-auto" />
                            </button>
                        </div>
              </div>

                    {/* Afternoon Sessions */}
                    <div className="space-y-4">
                        <h3 className="text-md font-medium text-gray-900 dark:text-white">Afternoon</h3>
                        <div className="space-y-3">
                            {sessions.afternoon.map((session, index) => (
                                <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                    <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">
                                        {session.start} - {session.end}
                                    </span>
                                    <button
                                        onClick={() => removeSession('afternoon', index)}
                                        className="ml-auto p-1 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                </div>
                            ))}
                </div>
                        <div className="space-y-2">
                            <div className="flex gap-2">
                                <CustomTimePicker 
                                    value={newSession.afternoon.start}
                                    onChange={(value) => handleTimeChange('afternoon', 'start', value)}
                                    className="flex-1 w-full"
                                    placeholder="Start Time"
                                />
                                <CustomTimePicker 
                                    value={newSession.afternoon.end}
                                    onChange={(value) => handleTimeChange('afternoon', 'end', value)}
                                    className="flex-1 w-full"
                                    placeholder="End Time"
                                />
              </div>
                            <button
                                onClick={() => addSession('afternoon')}
                                className="w-full px-3 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                            >
                                <Plus className="w-4 h-4 mx-auto" />
                            </button>
                        </div>
                    </div>

                    {/* Night Sessions */}
                    {isCoursDuSoir && (
                        <div className="space-y-4">
                            <h3 className="text-md font-medium text-gray-900 dark:text-white">Evening</h3>
                            <div className="space-y-3">
                                {sessions?.night.map((session, index) => (
                                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                        <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                        <span className="text-sm text-gray-600 dark:text-gray-300">
                                            {session.start} - {session.end}
                                        </span>
                                        <button
                                            onClick={() => removeSession('night', index)}
                                            className="ml-auto p-1 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <CustomTimePicker 
                                        value={newSession.night.start}
                                        onChange={(value) => handleTimeChange('night', 'start', value)}
                                        className="flex-1 w-full"
                                        placeholder="Start Time"
                                    />
                                    <CustomTimePicker 
                                        value={newSession.night.end}
                                        onChange={(value) => handleTimeChange('night', 'end', value)}
                                        className="flex-1 w-full"
                                        placeholder="End Time"
                                    />
                               
                                </div>
                                <button
                                    onClick={() => addSession('night')}
                                    className="w-full px-3 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                                >
                                    <Plus className="w-4 h-4 mx-auto" />
                                </button>
                            </div>
                        </div>
                    )}
           </div>
        </div>
        </div>
    )
}